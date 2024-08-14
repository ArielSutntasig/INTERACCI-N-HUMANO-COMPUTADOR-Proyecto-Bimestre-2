document.querySelectorAll('.factura-row').forEach(function(row) {
    row.addEventListener('click', function() {
        var id = row.dataset.id;
        var fecha = row.dataset.fecha;
        var cliente = row.dataset.cliente;
        var subtotal = row.dataset.subtotal;
        var impuestos = row.dataset.impuestos;
        var total = row.dataset.total;
        var metodo = row.dataset.metodo;
        var estado = row.dataset.estado;
        var direccion = row.dataset.direccion;
        var descripcion = row.dataset.descripcion.replace(/[\[\]]/g, '').split('-');
        var cantidad = row.dataset.cantidad.replace(/[\[\]]/g, '').split('-');
        var precioUnitario = row.dataset.preciounit.replace(/[\[\]]/g, '').split('-');

        document.getElementById('factura-id').textContent = id;
        document.getElementById('factura-fecha').textContent = fecha;
        document.getElementById('factura-cliente').textContent = cliente;
        document.getElementById('factura-direccion').textContent = direccion;
        document.getElementById('factura-subtotal').textContent = subtotal;
        document.getElementById('factura-impuestos').textContent = impuestos;
        document.getElementById('factura-total').textContent = total;

        var itemsContainer = document.getElementById('factura-items');
        itemsContainer.innerHTML = '';  // Limpiar cualquier contenido previo

        descripcion.forEach(function(desc, index) {
            var row = document.createElement('tr');

            var descCell = document.createElement('td');
            descCell.textContent = desc;
            row.appendChild(descCell);

            var cantCell = document.createElement('td');
            cantCell.textContent = cantidad[index];
            row.appendChild(cantCell);

            var priceCell = document.createElement('td');
            priceCell.textContent = `$${precioUnitario[index]}`;
            row.appendChild(priceCell);

            var montoCell = document.createElement('td');
            montoCell.textContent = `$${(cantidad[index] * precioUnitario[index]).toFixed(2)}`;
            row.appendChild(montoCell);

            itemsContainer.appendChild(row);
        });

        // Mostrar el modal
        var modal = document.getElementById('facturaModal');
        modal.style.display = "block";
    });
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    var modal = document.getElementById('facturaModal');
    modal.style.display = "none";
});
