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
        label: '2017 - Basico',
        data: [55, 52, 47, 54, 51, 50, 50, 33, 30, 33, 37, 28, 25, 27, 57, 57, 0, 0, 0, 0, 0, 0, 0,0, 43],
        backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },{
        label: '2017 - Intermedio',
        data: [26, 57, 45, 41, 44, 47, 46, 40, 35, 30, 37, 0, 35, 30, 44, 45, 0, 0, 0, 0, 0, 0, 0,0, 38],
        backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },
{
        label: '2017 - Avanzado',
        data: [31, 31, 0, 50, 41, 31, 27, 38, 0, 0, 38, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0,0,8],
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
            text: 'Datos de ventas por mes'
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
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [3, 5, 6, 9, 4, 4];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE1(); // Llamada a la función para agregar datos específicos de IE-1
            break;

        case 'IE - 2':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
            chartB.data.datasets[0].data = [5, 1, 4, 2, 4, 0];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE2(); // Llamada a la función para agregar datos específicos de IE-2
            break;
		case 'IE - 3':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
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

            chartB.data.labels = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
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

            chartB.data.labels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
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
}

// Función para agregar datos específicos de IE-1
function agregarDatosIE1() {
    agregarDato('P4', 2, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 1, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 2, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 1, '#0f90bc');
    

    agregarDatoB('P1', 3, '#003400');
    agregarDatoB('P2', 5, '#004300');
    agregarDatoB('P3', 6, '#005100');
    agregarDatoB('P4', 9, '#006100');
    agregarDatoB('P5', 4, '#007000');
    agregarDatoB('P6', 4, '#008000');
    agregarDatoB('P7', 7, '#009000');
    agregarDatoB('P8', 5, '#00a000');
    agregarDatoB('P9', 9, '#00b000');
    agregarDatoB('P10', 9, '#00c100');
    agregarDatoB('P11', 9, '#00d100');
    agregarDatoB('P12', 10, '#00e100');
    agregarDatoB('P13', 7, '#00f200');
    agregarDatoB('P14', 8, '#00ff2b');
    agregarDatoB('P15', 5, '#00ff12');
    agregarDatoB('P16', 11, '#00ff45');
    agregarDatoB('P17', 8, '#00ff5f');
    agregarDatoB('P18', 3, '#00ff79');
    agregarDatoB('P19', 5, '#00ff93');
    agregarDatoB('P20', 6, '#98ff96');
}

// Función para agregar datos específicos de IE-2
function agregarDatosIE2() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 1, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 1, '#0d8cbc');
    agregarDato('P15', 0, '#0e8eb4');
    agregarDato('P16', 2, '#0f90bc');

    agregarDatoB('P1', 5, '#ff0000');
    agregarDatoB('P2', 1, '#00ff00');
    agregarDatoB('P3', 4, '#0000ff');
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 4, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 3, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 3, '#0033ff');
    agregarDatoB('P10', 4, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 4, '#00ff33');
    agregarDatoB('P13', 2, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 4, '#00ff33');
    agregarDatoB('P16', 6, '#ff3300');
    agregarDatoB('P17', 2, '#00ff33');
    agregarDatoB('P18', 2, '#ff0033');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 3, '#ff3300');
}

function agregarDatosIE3() {
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

