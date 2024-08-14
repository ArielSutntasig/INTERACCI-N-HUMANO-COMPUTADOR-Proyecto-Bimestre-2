from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Ruta para la vista general
@app.route('/')
def index():
    # Leer los datos de los CSV con el delimitador correcto
    empleados_df = pd.read_csv('data/empleados.csv', delimiter=';')
    clientes_df = pd.read_csv('data/clientes.csv', delimiter=';')
    productos_df = pd.read_csv('data/productos.csv', delimiter=';')
    ventas_df = pd.read_csv('data/ventas.csv', delimiter=';')

    # Procesamiento de datos
    total_empleados = len(empleados_df)
    total_clientes = len(clientes_df)
    
    # Convertir la columna de fechas a formato datetime para extraer el mes
    ventas_df['Fecha'] = pd.to_datetime(ventas_df['Fecha'], dayfirst=True)
    ventas_df['Mes'] = ventas_df['Fecha'].dt.month
    
    # Agrupar por mes y sumar las ventas monetarias
    ventas_por_mes = ventas_df.groupby('Mes')['Total'].sum().reindex(range(1, 13), fill_value=0).tolist()
    total_ventas_anual = sum(ventas_por_mes)

    # Categoría de productos para el gráfico (usando el nombre correcto de la columna)
    productos_por_categoria = productos_df.groupby('Categoria').size().to_dict()

    return render_template('index.html', 
                           total_empleados=total_empleados,
                           total_clientes=total_clientes,
                           ventas_por_mes=ventas_por_mes,
                           total_ventas_anual=total_ventas_anual,
                           productos_por_categoria=productos_por_categoria)

# Ruta para la sección de empleados
@app.route('/empleados')
def empleados():
    empleados_df = pd.read_csv('data/empleados.csv', delimiter=';')
    
    # Renombrar la columna 'Correo Electronico' a 'CorreoElectronico'
    empleados_df.rename(columns={'Correo Electronico': 'CorreoElectronico'}, inplace=True)
   
    empleados = empleados_df.to_dict(orient='records')
    return render_template('empleados.html', empleados=empleados)

# Ruta para la sección de productos
@app.route('/productos', methods=['GET'])
def productos():
    productos_df = pd.read_csv('data/productos.csv', delimiter=';')

     # Renombrar la columna 'Correo Electronico' a 'CorreoElectronico'
    productos_df.rename(columns={'Cantidad en Stock': 'CantidadStock'}, inplace=True)
    productos_df.rename(columns={'Fecha de Ingreso': 'FechaIngreso'}, inplace=True)
    
    # Obtener la lista de categorías únicas
    categorias = productos_df['Categoria'].unique().tolist()
    
    # Obtener la categoría seleccionada (si la hay)
    categoria_seleccionada = request.args.get('categoria')
    
    if categoria_seleccionada:
        # Filtrar los productos por la categoría seleccionada
        productos_df = productos_df[productos_df['Categoria'] == categoria_seleccionada]
    
    productos = productos_df.to_dict(orient='records')
    
    return render_template('productos.html', 
                           productos=productos, 
                           categorias=categorias, 
                           categoria_seleccionada=categoria_seleccionada)

# Ruta para la sección de clientes
@app.route('/clientes')
def clientes():
    clientes_df = pd.read_csv('data/clientes.csv', delimiter=';')
    
    # Renombrar la columna 'Correo Electronico' a 'CorreoElectronico'
    clientes_df.rename(columns={'ID Cliente': 'IDCliente'}, inplace=True)
    clientes_df.rename(columns={'Correo Electronico': 'CorreoElectronico'}, inplace=True)
    clientes_df.rename(columns={'Fecha de Nacimiento': 'FechaNacimiento'}, inplace=True)
    
    # Convertir el DataFrame a un diccionario de registros
    clientes = clientes_df.to_dict(orient='records')
    
    # Renderizar la plantilla con los datos
    return render_template('clientes.html', clientes=clientes)

# Ruta para la sección de facturación
@app.route('/facturacion', methods=['GET', 'POST'])
def facturacion():
    ventas_df = pd.read_csv('data/ventas.csv', delimiter=';')
    
    # Renombrar la columna 'Correo Electronico' a 'CorreoElectronico'
    ventas_df.rename(columns={'ID Cliente': 'IdCliente'}, inplace=True)
    ventas_df.rename(columns={'Metodo de Pago': 'MetodoPago'}, inplace=True)
    
    if request.method == 'POST':
        cedula = request.form.get('cedula')
        if cedula:
            ventas_df = ventas_df[ventas_df['IdCliente'].astype(str) == cedula]

    ventas = ventas_df.to_dict(orient='records')
    return render_template('facturacion.html', ventas=ventas)

if __name__ == '__main__':
    app.run(debug=True)
