<div align="center">
<img src="Resources/Image1.png" width="100" height="100">
<h1>ESCUELA POLITÉCNICA NACIONAL</h1>
<h2> FACULTAD DE INGENIERÍA DE SISTEMAS </h2>
<h2> INGENIERÍA EN SOFTWARE </h2>
</div>

---

**PERÍODO ACADÉMICO:** 2024-A<br>
**ASIGNATURA:** INTERACCIÓN HUMANO COMPUTADOR<br>
**GRUPO:** GR1SW<br>
**Docente:** Fredy Gavilanes Sagñay<br>

---
**TIPO DE INSTRUMENTO:** Proyecto Bimestre 2<br>
**TÍTULO:** App Web<br>
**FECHA DE ENTREGA:** 14 de agosto de 2024<br>
**Estudiante:**<br>

- Suntasig Quinga Denis Ariel

<div align="center">
<img src="Resources/Image2.png" width="300" height="300">
</div>

---

<div align="center">

# Supermaxi Dashboard

Este proyecto es una aplicación web que centraliza la gestión de datos de empleados, productos, facturas y clientes para Supermaxi. Utiliza Flask (un microframework en Python) para manejar el backend y generar la página HTML que visualiza los datos de archivos CSV. Además, emplea Chart.js para crear gráficos interactivos en la vista general.

## Requisitos

Antes de empezar, asegúrate de tener instalado Python 3.7 o superior en tu sistema. También necesitarás un entorno de desarrollo como PowerShell o CMD (Símbolo del sistema) en Windows.

## Configuración Inicial del Proyecto

### 1. Clonar el Repositorio

**Primero, clona este repositorio en tu máquina local:**

git clone https://github.com/ArielSutntasig/INTERACCI-N-HUMANO-COMPUTADOR-Proyecto-Bimestre-2.git

**Ingresa al directorio del proyecto:**

cd supermaxi_dashboard 


### 2. Ejecutar la Aplicación

**Activa el entorno virtual, con el siguiente comando:**

**En PowerShell:**
.\venv\Scripts\Activate.ps1

**En CMD:**
.\venv\Scripts\activate.bat

Si encuentras problemas relacionados con permisos, puedes ejecutar el siguiente comando para permitir la ejecución de scripts:

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process


**Puedes ejecutar la aplicación con el siguiente comando:**

python app.py

La aplicación se iniciará y estará disponible en http://127.0.0.1:5000/ en tu navegador.

### 3. Desactivar el Entorno Virtual

**Cuando hayas terminado de trabajar en el proyecto, puedes desactivar el entorno virtual simplemente escribiendo:**

deactivate

### Verificación

Después de activar el entorno virtual correctamente, deberías ver que el prompt de tu terminal cambia para incluir el nombre del entorno virtual (por ejemplo, (venv)), indicando que ahora estás trabajando dentro del entorno virtual.

### Ejemplo de Activación en PowerShell

PS C:\ruta\a\tu\proyecto\supermaxi_dashboard> .\venv\Scripts\Activate.ps1
(venv) PS C:\ruta\a\tu\proyecto\supermaxi_dashboard>

### Uso
Una vez que la aplicación esté corriendo, podrás visualizar los gráficos interactivos generados por Chart.js y administrar los datos importados desde archivos CSV.

