function createCharts(productosPorCategoria, ventasPorMes, totalVentasAnual) {
    // Gráfico de productos por categoría
    const productosCtx = document.getElementById('productosChart').getContext('2d');
    new Chart(productosCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(productosPorCategoria),
            datasets: [{
                label: 'Productos por Categoría',
                data: Object.values(productosPorCategoria),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Percentage de productos en Stock por categoría',
                    font: {
                        size: 18
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: '#2B3674'
                },
                legend: {
                    display: true,
                    position: 'bottom', // Mueve la leyenda a la parte inferior
                    labels: {
                        color: '#A3AED0'  // Cambia el color de las etiquetas en la leyenda
                    }
                }
            }
        }
    });

    // Gráfico de ventas totales del año (monetarias)
    const ventasCtx = document.getElementById('ventasChart').getContext('2d');
    new Chart(ventasCtx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Ventas Totales del Mes ($)',
                data: ventasPorMes,
                backgroundColor: '#4318FF'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Total de Ventas ($)',
                        backgroundColor: '#A3AED0',
                        color: '#A3AED0'
                    },
                    ticks: {
                        color: '#A3AED0'  // Color de los labels en el eje x
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Meses',
                        backgroundColor: '#A3AED0',
                        color: '#A3AED0'
                    },
                    ticks: {
                        color: '#A3AED0'  // Color de los labels en el eje y
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#A3AED0'  // Cambia el color de la etiqueta del dataset en la leyenda
                    }
                },
                title: {
                    display: true,
                    text: 'Ventas Totales del Año: $' + totalVentasAnual.toFixed(2),
                    color: '#2B3674'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += '$' + context.parsed.y.toFixed(2);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}
