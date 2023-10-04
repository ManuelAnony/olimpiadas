// 2017 Preguntas 

// Generar colores aleatorios en formato rgba
function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = 0.5; // Establece la transparencia
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const data = {
    labels: ['IE-1', 'IE-2', 'IE-3', 'IE-4',
        'IE-5', 'IE-6', 'IE-7', 'IE-8', 'IE- 9', 'IE-10',
        'IE-11', 'IE-12', 'IE-13', 'IE-14', 'IE-15', 'IE-16',
        'IE-17', 'IE-18', 'IE-19', 'IE-20', 'IE-21', 'IE-22', 'IE-23',' ','TOTAL'],
    datasets: [{
        label: '2018 - Basico',
        data: [51, 0, 41, 48, 0, 49, 0, 0, 29, 0, 37, 36, 35, 0, 36, 43, 36, 37, 18, 28, 36, 32, 0,0, 37],
        backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },{
        label: '2018 - Intermedio',
        data: [21, 0, 29, 26, 0, 28, 0, 0, 0, 0, 13, 10, 25, 0, 17, 16, 14, 28, 0, 0, 13, 0, 0,0, 20],
        backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },
{
        label: '2018 - Avanzado',
        data: [20, 0, 21, 26, 0, 22, 0, 0, 0, 0, 20, 0, 12, 0, 15, 23, 20, 25, 0, 0, 0, 0, 0,0,20],
        backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },]
};

 // Opciones del gráfico
    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: function(value, context) {
            const institucionSeleccionada = document.getElementById('menuDesplegable').value;
            if (context.dataIndex === data.labels.indexOf(institucionSeleccionada)) {
              return value + '% (Usted está aquí)';
            } else {
              return value + '%';
            }
          }
        }
      }
    };

    // Crear el gráfico de barras
    const barChart = new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: data,
      options: options
    });

const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        }
    }
});

const ctxB = document.getElementById('chartB').getContext('2d');
const chartB = new Chart(ctxB, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
        }]
    },
    options: {
        title: {
            text: 'Gráfico de barras'
        },
        subtitle: {
            text: 'Datos de preguntas que se respondieron'
        },
        labels: {
            fontColor: 'black',
            fontSize: 1,
            boxWidth: 1
        },
        responsive: false,
        legend: {
            position: 'left',
        }
    }
});

const ctxC = document.getElementById('chartC').getContext('2d');
const chartC = new Chart(ctxC, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
        }]
    },
    options: {
        title: {
            text: 'Gráfico de barras'
        },
        subtitle: {
            text: 'Datos de preguntas que se respondieron'
        },
        labels: {
            fontColor: 'black',
            fontSize: 1,
            boxWidth: 1
        },
        responsive: false,
        legend: {
            position: 'left',
        }
    }
});

// Función para mostrar gráficos y agregar datos según la selección en el menú desplegable
function mostrarMensaje() {
    const institucionSeleccionada = document.getElementById('menuDesplegable').value;

    switch (institucionSeleccionada) {
        case 'IE - 1':
            chart.data.labels = ['P1', 'P2' ,'P3'];
            chart.data.datasets[0].data = [4, 4];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [4, 4, 8 ];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15'];
            chartC.data.datasets[0].data = [4, 4, 8, 6, 2, 4, 5, 6, 3, 2, 2, 3, 3, 3, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE1(); // Llamada a la función para agregar datos específicos de IE-1
            break;

        case 'IE - 2':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = [];
            chartB.data.datasets[0].data = [];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE2(); // Llamada a la función para agregar datos específicos de IE-2
            break;
		case 'IE - 3':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [2, 4, 5];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [2, 1, 4, 2, 3, 1];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE3(); // Llamada a la función para agregar datos específicos de IE-3
            break;

        case 'IE - 4':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];//Avanzados

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [1, 3, 5, 2, 3, 2];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];//Basicas

            agregarDatosIE4(); // Llamada a la función para agregar datos específicos de IE-4
            break;

        case 'IE - 5':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 2, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [3, 2, 6, 5, 2, 5];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE5(); // Llamada a la función para agregar datos específicos de IE-5
            break;

        case 'IE - 6':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [3, 2, 3];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [4, 2, 7, 9, 8, 2];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE6(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 7':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [4, 4, 6, 2, 5, 1];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE7(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 8':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [1, 2, 1, 1, 1, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE8(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 9':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [2, 2, 1, 2, 0, 1];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE9(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 10':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [1, 1, 1, 2, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE10(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 11':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [2, 0, 3, 2, 1, 1];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE11(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 12':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [1, 0, 2, 2, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE12(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 13':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [1, 1, 2, 1, 1, 2];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE13(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 14':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [2, 2, 0, 0, 4, 1];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE14(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 15':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 0, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 3, 2, 4, 2, 2];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE15(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 16':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 2, 1, 1, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE16(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 17':
            chart.data.labels = ['P1', 'P2', 'A3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE17(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 18':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE18(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 19':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE19(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 20':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 10];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE20(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 21':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 10];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE21(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 22':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE22(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 23':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [10, 10, 14];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            agregarDatosIE23(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        default:
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [];

            chartB.data.labels = [];
            chartB.data.datasets[0].data = [];
            chartB.data.datasets[0].backgroundColor = [];
            break;
    }

    chart.update();
    chartB.update();
    chartC.update();
}

// Función para agregar datos específicos de IE-1
function agregarDatosIE1() {
    agregarDato('P4', 3, '#03886c');
    agregarDato('P5', 3, '#049974');
    agregarDato('P6', 2, '#05ab7c');
    agregarDato('P7', 3, '#06bd84');
    agregarDato('P8', 3, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 2, '#09f79c');
    agregarDato('P11', 2, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    

    agregarDatoB('P4', 6, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 4, '#00ffff');
    agregarDatoB('P7', 5, '#ff0033');
    agregarDatoB('P8', 6, '#33ff00');
    agregarDatoB('P9', 3, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 3, '#00ff33');
    agregarDatoB('P13', 3, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 2, '#00ff33');

    agregarDatoC('P1', 4, '#ff0000');
    agregarDatoC('P2', 4, '#00ff00');
    agregarDatoC('P3', 8, '#0000ff');
    agregarDatoC('P4', 6, '#ffff00');
    agregarDatoC('P5', 2, '#ff00ff');
    agregarDatoC('P6', 4, '#00ffff');
    agregarDatoC('P7', 5, '#ff0033');
    agregarDatoC('P8', 6, '#33ff00');
    agregarDatoC('P9', 3, '#0033ff');
    agregarDatoC('P10', 2, '#3300ff');
    agregarDatoC('P11', 2, '#ff3300');
    agregarDatoC('P12', 3, '#00ff33');
    agregarDatoC('P13', 3, '#3300ff');
    agregarDatoC('P14', 3, '#ff0033');
    agregarDatoC('P15', 2, '#00ff33');

}

// Función para agregar datos específicos de IE-2
function agregarDatosIE2() {
    
}

function agregarDatosIE3() {
    agregarDato('P4', 4, '#03886c');
    agregarDato('P5', 4, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 3, '#06bd84');
    agregarDato('P8', 3, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 2, '#09f79c');
    agregarDato('P11', 1, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 2, '#0cafb4');
    agregarDato('P14', 4, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');


    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 4, '#00ff00');
    agregarDatoB('P3', 5, '#0000ff');
    agregarDatoB('P4', 4, '#ffff00');
    agregarDatoB('P5', 4, '#ff00ff');
    agregarDatoB('P6', 3, '#00ffff');
    agregarDatoB('P7', 3, '#ff0033');
    agregarDatoB('P8', 5, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 4, '#00ff33');
    agregarDatoB('P13', 2, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');

}
function agregarDatosIE4() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE5() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}

function agregarDatosIE6() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}

function agregarDatosIE7() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}

function agregarDatosIE8() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE9() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE10() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE11() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE12() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE13() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE14() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE15() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE16() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE17() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE18() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE19() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE20() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE21() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE22() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}
function agregarDatosIE23() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 0, '#0f90bc');

    agregarDatoB('P1', 2, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 3, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 6, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 5, '#ff3300');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 2, '#ff3300');
}

// Función para agregar datos al gráfico de pie
function agregarDato(label, valor, color) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(valor);
    chart.data.datasets[0].backgroundColor.push(color);
}

// Función para agregar datos al gráfico de barras
function agregarDatoB(label, valor, color) {
    chartB.data.labels.push(label);
    chartB.data.datasets[0].data.push(valor);
    chartB.data.datasets[0].backgroundColor.push(color);
}

// Función para agregar datos al gráfico de barras
function agregarDatoC(label, valor, color) {
    chartB.data.labels.push(label);
    chartB.data.datasets[0].data.push(valor);
    chartB.data.datasets[0].backgroundColor.push(color);
}


