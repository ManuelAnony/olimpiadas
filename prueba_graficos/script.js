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
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [5, 1, 6];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [3, 5, 6, 9, 4, 4, 7, 5, 9, 9, 9, 10, 7, 8, 5, 11, 8, 3, 5, 6];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE1(); // Llamada a la función para agregar datos específicos de IE-1
            break;

        case 'IE - 2':
            chart.data.labels = ['P1', 'P2' ,'P3'];
            chart.data.datasets[0].data = [0, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [2, 1, 3];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [5, 1, 4, 2, 4, 0, 3, 3, 3, 4, 3, 4, 2, 3, 4, 6, 2, 2, 4, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE2(); // Llamada a la función para agregar datos específicos de IE-2
            break;
        case 'IE - 3':

            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [2, 0, 2];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [2, 1, 4, 2, 3, 1, 2, 3, 2, 6, 2, 6, 1, 3, 4, 5, 1, 2, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE3(); // Llamada a la función para agregar datos específicos de IE-3
            break;

        case 'IE - 4':
            chart.data.labels = ['P1','P2','P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#005954', '#01655c', '#027664'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [1, 0, 4];
            chartB.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [1, 3, 5, 2, 3, 2, 2, 1, 5, 5, 3, 5, 3, 4, 3, 6, 3, 3, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE4(); // Llamada a la función para agregar datos específicos de IE-4
            break;

        case 'IE - 5':
            chart.data.labels = ['P1','P2','P3'];
            chart.data.datasets[0].data = [1, 2, 0];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [5, 1, 6];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [3, 2, 6, 5, 2, 5, 4, 7, 8, 7, 7, 6, 6, 2, 4, 10, 6, 4, 4, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE5(); // Llamada a la función para agregar datos específicos de IE-5
            break;

        case 'IE - 6':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [3, 2, 3];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [5, 0, 6];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [4, 2, 7, 9, 8, 2, 6, 3, 11, 8, 5, 10, 6, 6, 9, 13, 8, 5, 7, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE6(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 7':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [3, 2, 5];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [4, 4, 6, 2, 5, 1, 6, 4, 6, 3, 4, 6, 4, 5, 6, 9, 5, 4, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE7(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 8':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [1, 1, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 2, 1, 1, 1, 0, 2, 1, 3, 3, 3, 3, 2, 1, 1, 5, 2, 2, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE8(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 9':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [1, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 2, 1, 2, 0, 1, 0, 1, 2, 0, 1, 2, 2, 0, 2, 5, 1, 4, 2, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE9(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 10':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 3, 0, 0, 2, 2, 0, 1, 2, 1];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE10(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 11':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 2];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 0, 3, 2, 1, 1, 3, 1, 2, 4, 2, 3, 3, 3, 2, 5, 2, 3, 2, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE11(); // Llamada a la función para agregar datos específicos de IE-2 voy aca 5/10/2023
            break;

        case 'IE - 12':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = [];
            chartB.data.datasets[0].data = [];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 0, 2, 2, 0, 0, 3, 1, 4, 2, 2, 5, 0, 2, 4, 5, 2, 0, 3, 1];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE12(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 13':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 1, 2, 1, 1, 2, 1, 0, 2, 2, 2, 4, 0, 1, 2, 4, 2, 1, 1,0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE13(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 14':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 2, 0, 0, 4, 1, 1, 1, 3, 2, 2, 3, 1, 0, 2, 5, 3, 3, 3, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE14(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 15':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 0, 1];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [2, 3, 5];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [0, 3, 2, 4, 2, 2, 3, 3, 6, 5, 5, 6, 3, 3, 5, 6, 3, 3, 1, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE15(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 16':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff'];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 1, 3];
            chartB.data.datasets[0].backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [0, 0, 2, 1, 1, 0, 1, 2, 3, 3, 3, 5, 3, 1, 4, 5, 3, 25, 5, 1];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE16(); // Llamada a la función para agregar datos específicos de IE-2
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
    agregarDato('P4', 2, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 4, '#06bd84');
    agregarDato('P8', 2, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 3, '#09f79c');
    agregarDato('P11', 1, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 3, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');
    agregarDato('P16', 1, '#0d8cbc');
    

    agregarDatoB('P4', 5, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 4, '#00ffff');
    agregarDatoB('P7', 6, '#ff0033');
    agregarDatoB('P8', 6, '#33ff00');
    agregarDatoB('P9', 3, '#0033ff');
    agregarDatoB('P10', 5, '#3300ff');
    agregarDatoB('P11', 6, '#ff3300');
    agregarDatoB('P12', 4, '#00ff33');
    agregarDatoB('P13', 3, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 5, '#00ff33');

}

// Función para agregar datos específicos de IE-2
function agregarDatosIE2() {
    
    agregarDatoB('P4', 3, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 4, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 4, '#ff3300');
    agregarDatoB('P12', 3, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');
}

function agregarDatosIE3() {

}
function agregarDatosIE4() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 3, '#049974');
    agregarDato('P6', 4, '#05ab7c');
    agregarDato('P7', 4, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 4, '#09f79c');
    agregarDato('P11', 4, '#0affa4');
    agregarDato('P12', 4, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 3, '#0d8cbc');
    agregarDato('P15', 2, '#0d8cbc');   

    
    agregarDatoB('P4', 8, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 6, '#00ffff');
    agregarDatoB('P7', 7, '#ff0033');
    agregarDatoB('P8', 8, '#33ff00');
    agregarDatoB('P9', 6, '#0033ff');
    agregarDatoB('P10', 8, '#3300ff');
    agregarDatoB('P11', 7, '#ff3300');
    agregarDatoB('P12', 4, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 2, '#ff0033');
    agregarDatoB('P15', 7, '#00ff33');
    
}

function agregarDatosIE5() {
    agregarDato('P4', 8, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 4, '#05ab7c');
    agregarDato('P7', 4, '#06bd84');
    agregarDato('P8', 8, '#07d58c');
    agregarDato('P9', 8, '#08e994');
    agregarDato('P10', 8, '#09f79c');
    agregarDato('P11', 8, '#0affa4');
    agregarDato('P12', 4, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 7, '#0d8cbc');
    agregarDato('P15', 5, '#0d8cbc');   

    
    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 3, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 3, '#00ff33');
    agregarDatoB('P13', 3, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');
}

function agregarDatosIE6() {
    agregarDatoB('P4', 6, '#03886c');
    agregarDatoB('P5', 2, '#049974');
    agregarDatoB('P6', 3, '#05ab7c');
    agregarDatoB('P7', 4, '#06bd84');
    agregarDatoB('P8', 5, '#07d58c');
    agregarDatoB('P9', 3, '#08e994');
    agregarDatoB('P10', 6, '#09f79c');
    agregarDatoB('P11', 5, '#0affa4');
    agregarDatoB('P12', 4, '#0bb7ac');
    agregarDatoB('P13', 1, '#0cafb4');
    agregarDatoB('P14', 4, '#0d8cbc');
    agregarDatoB('P15', 6, '#0d8cbc');


    
    agregarDato('P4', 0, '#ffff00');
    agregarDato('P5', 2, '#ff00ff');
    agregarDato('P6', 3, '#00ffff');
    agregarDato('P7', 3, '#ff0033');
    agregarDato('P8', 1, '#33ff00');
    agregarDato('P9', 0, '#0033ff');
    agregarDato('P10', 2, '#3300ff');
    agregarDato('P11', 3, '#ff3300');
    agregarDato('P12', 3, '#00ff33');
    agregarDato('P13', 2, '#3300ff');
    agregarDato('P14', 1, '#ff0033');
    agregarDato('P15', 2, '#00ff33');

}
function agregarDatosIE7() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 3, '#049974');
    agregarDato('P6', 4, '#05ab7c');
    agregarDato('P7', 3, '#06bd84');
    agregarDato('P8', 3, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 2, '#09f79c');
    agregarDato('P11', 2, '#0affa4');
    agregarDato('P12', 4, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 3, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');


    
    agregarDatoB('P4', 7, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 4, '#00ffff');
    agregarDatoB('P7', 5, '#ff0033');
    agregarDatoB('P8', 7, '#33ff00');
    agregarDatoB('P9', 6, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 7, '#ff3300');
    agregarDatoB('P12', 5, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 4, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');
}
function agregarDatosIE8() {

}

function agregarDatosIE9() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 1, '#09f79c');
    agregarDato('P11', 1, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');


    
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 2, '#00ff33');
}

function agregarDatosIE11() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 1, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');

    agregarDatoB('P1', 0, '#ff0000');
    agregarDatoB('P2', 2, '#00ff00');
    agregarDatoB('P3', 2, '#0000ff');
    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 0, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 0, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');

}


function agregarDatosIE11() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 1, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 1, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 1, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');


    
    agregarDatoB('P4', 3, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 2, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');
}

function agregarDatosIE12() {
    
    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 1, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 1, '#3300ff');
    agregarDatoB('P11', 1, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 0, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
}
function agregarDatosIE13() {
    
    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 2, '#ff3300');
    agregarDatoB('P12', 2, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 0, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');

}

function agregarDatosIE14() {
    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 1, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 1, '#3300ff');
    agregarDatoB('P11', 1, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');
}

function agregarDatosIE15() {

}
function agregarDatosIE16() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 2, '#049974');
    agregarDato('P6', 2, '#05ab7c');
    agregarDato('P7', 2, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 0, '#08e994');
    agregarDato('P10', 2, '#09f79c');
    agregarDato('P11', 1, '#0affa4');
    agregarDato('P12', 2, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 1, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');


    agregarDatoB('P4', 4, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 4, '#ff0033');
    agregarDatoB('P8', 4, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 4, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 2, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 2, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');

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
    chartC.data.labels.push(label);
    chartC.data.datasets[0].data.push(valor);
    chartC.data.datasets[0].backgroundColor.push(color);
}
