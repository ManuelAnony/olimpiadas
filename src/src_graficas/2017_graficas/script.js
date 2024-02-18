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
        backgroundColor: '#C2F0C2',//backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	//borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },{
        label: '2017 - Intermedio',
        data: [26, 57, 45, 41, 44, 47, 46, 40, 35, 30, 37, 0, 35, 30, 44, 45, 0, 0, 0, 0, 0, 0, 0,0, 38],
        backgroundColor: '#71D083',//backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	//borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
    	borderWidth: 1
    },
{
        label: '2017 - Avanzado',
        data: [31, 31, 0, 50, 41, 31, 27, 38, 0, 0, 38, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0,0,8],
        backgroundColor: '#53B365',//backgroundColor: generarColorAleatorio(), // Genera un color aleatorio para cada barra
    	//borderColor: generarColorAleatorio(), // Genera un color aleatorio para el borde de cada barra
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
    type: 'bar',
    data: {
        labels: ['Preguntas'],
        datasets: [{
            label: 'Num estudiantes que respondieron',
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
    type: 'bar',
    data: {
        labels: ['Preguntas'],
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
        responsive: true,
        legend: {
            position: 'left',
        }
    }
});

const ctxC = document.getElementById('chartC').getContext('2d');
const chartC = new Chart(ctxC, {
    type: 'bar',
    data: {
        labels: ['Preguntas'],
        datasets: [{
            label: 'Num estudiantes que respondieron',
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
        responsive: true,
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
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [5, 1, 6];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [3, 5, 6, 9, 4, 4, 7, 5, 9, 9, 9, 10, 7, 8, 5, 11, 8, 3, 5, 6];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE1(); // Llamada a la función para agregar datos específicos de IE-1
            break;

        case 'IE - 2':
            chart.data.labels = ['P1', 'P2' ,'P3'];
            chart.data.datasets[0].data = [0, 1, 1];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [2, 1, 3];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [5, 1, 4, 2, 4, 0, 3, 3, 3, 4, 3, 4, 2, 3, 4, 6, 2, 2, 4, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE2(); // Llamada a la función para agregar datos específicos de IE-2
            break;
        case 'IE - 3':

            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [2, 0, 2];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [2, 1, 4, 2, 3, 1, 2, 3, 2, 6, 2, 6, 1, 3, 4, 5, 1, 2, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE3(); // Llamada a la función para agregar datos específicos de IE-3
            break;

        case 'IE - 4':
            chart.data.labels = ['P1','P2','P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [1, 0, 4];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [1, 3, 5, 2, 3, 2, 2, 1, 5, 5, 3, 5, 3, 4, 3, 6, 3, 3, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE4(); // Llamada a la función para agregar datos específicos de IE-4
            break;

        case 'IE - 5':
            chart.data.labels = ['P1','P2','P3'];
            chart.data.datasets[0].data = [1, 2, 0];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1','P2','P3'];
            chartB.data.datasets[0].data = [5, 1, 6];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15','P16','P17', 'P18', 'P19', 'P20'];
            chartC.data.datasets[0].data = [3, 2, 6, 5, 2, 5, 4, 7, 8, 7, 7, 6, 6, 2, 4, 10, 6, 4, 4, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE5(); // Llamada a la función para agregar datos específicos de IE-5
            break;

        case 'IE - 6':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [3, 2, 3];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [5, 0, 6];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [4, 2, 7, 9, 8, 2, 6, 3, 11, 8, 5, 10, 6, 6, 9, 13, 8, 5, 7, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE6(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 7':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [3, 2, 5];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [4, 4, 6, 2, 5, 1, 6, 4, 6, 3, 4, 6, 4, 5, 6, 9, 5, 4, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE7(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 8':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 1];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [1, 1, 0];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 2, 1, 1, 1, 0, 2, 1, 3, 3, 3, 3, 2, 1, 1, 5, 2, 2, 4, 2];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE8(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 9':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [1, 0, 0];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 2, 1, 2, 0, 1, 0, 1, 2, 0, 1, 2, 2, 0, 2, 5, 1, 4, 2, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE9(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 10':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 3, 0, 0, 2, 2, 0, 1, 2, 1];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];

            agregarDatosIE10(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 11':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [0, 0, 1];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 2];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 0, 3, 2, 1, 1, 3, 1, 2, 4, 2, 3, 3, 3, 2, 5, 2, 3, 2, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE11(); // Llamada a la función para agregar datos específicos de IE-2 voy aca 5/10/2023
            break;

        case 'IE - 12':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = [];
            chartB.data.datasets[0].data = [];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 0, 2, 2, 0, 0, 3, 1, 4, 2, 2, 5, 0, 2, 4, 5, 2, 0, 3, 1];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE12(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 13':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [1, 1, 2, 1, 1, 2, 1, 0, 2, 2, 2, 4, 0, 1, 2, 4, 2, 1, 1,0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE13(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 14':
            chart.data.labels = [];
            chart.data.datasets[0].data = [];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 0, 0];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [2, 2, 0, 0, 4, 1, 1, 1, 3, 2, 2, 3, 1, 0, 2, 5, 3, 3, 3, 0];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE14(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 15':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 0, 1];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [2, 3, 5];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

            chartC.data.labels = ['P1','P2','P3','P4','P5','P6','P7','P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16','P17', 'P18','P19', 'P20'];
            chartC.data.datasets[0].data = [0, 3, 2, 4, 2, 2, 3, 3, 6, 5, 5, 6, 3, 3, 5, 6, 3, 3, 1, 3];
            chartC.data.datasets[0].backgroundColor = ['#003400', '#004300', '#005100', '#006100', '#007000', '#008000'];
            
            agregarDatosIE15(); // Llamada a la función para agregar datos específicos de IE-2
            break;

        case 'IE - 16':
            chart.data.labels = ['P1', 'P2', 'P3'];
            chart.data.datasets[0].data = [1, 1, 2];
            chart.data.datasets[0].backgroundColor = [
                '#C2F0C2', '#B3E4B3', '#A4D9A4', '#95CE95', '#86C386',
                '#76B876', '#67AD67', '#58A258', '#499749', '#3A8D3A',
                '#2B822B', '#1C771C', '#0D6C0D', '#006100'
            ];

            chartB.data.labels = ['P1', 'P2', 'P3'];
            chartB.data.datasets[0].data = [0, 1, 3];
            chartB.data.datasets[0].backgroundColor = [
                '#00FF6A', '#00FF4A', '#00FF2A', '#00FF0A', '#00EA00',
                '#00DD00', '#00D000', '#00C300', '#00B600', '#00A900',
                '#009C00', '#008F00', '#008200', '#007500', '#006800',
                '#005B00', '#004E00', '#004100', '#003400'
            ];

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
    agregarDato('P7', 1, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 2, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 1, '#0d8cbc');
    

    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 4, '#ff00ff');
    agregarDatoB('P6', 6, '#00ffff');
    agregarDatoB('P7', 7, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 6, '#ff0033');
    agregarDatoB('P15', 6, '#00ff33');
    agregarDatoB('P16', 2, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 5, '#00ff33');

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
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 2, '#0d8cbc');
    

    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 3, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 1, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 2, '#00ff33');
    agregarDatoB('P19', 1, '#00ff33');
    agregarDatoB('P20', 2, '#00ff33');
}

function agregarDatosIE3() {    

    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 1, '#00ff33');
    agregarDatoB('P20', 1, '#00ff33');
}

function agregarDatosIE4() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 1, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 0, '#0d8cbc');
    

    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 4, '#00ffff');
    agregarDatoB('P7', 3, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 4, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');
    agregarDatoB('P16', 0, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 1, '#00ff33');
    agregarDatoB('P20', 2, '#00ff33');
    
}

function agregarDatosIE5() {
    agregarDato('P4', 4, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 1, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 1, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 1, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 1, '#0d8cbc');
    

    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 4, '#ff00ff');
    agregarDatoB('P6', 6, '#00ffff');
    agregarDatoB('P7', 7, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 6, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 6, '#ff0033');
    agregarDatoB('P15', 6, '#00ff33');
    agregarDatoB('P16', 2, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 5, '#00ff33');
}

function agregarDatosIE6() {
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
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 2, '#0d8cbc');
    

    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 7, '#ff00ff');
    agregarDatoB('P6', 7, '#00ffff');
    agregarDatoB('P7', 8, '#ff0033');
    agregarDatoB('P8', 7, '#33ff00');
    agregarDatoB('P9', 4, '#0033ff');
    agregarDatoB('P10', 9, '#3300ff');
    agregarDatoB('P11', 4, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 8, '#ff0033');
    agregarDatoB('P15', 9, '#00ff33');
    agregarDatoB('P16', 3, '#00ff33');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 4, '#00ff33');
    agregarDatoB('P20', 7, '#00ff33');
}

function agregarDatosIE7() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 2, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 3, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 2, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 1, '#0d8cbc');
    

    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 4, '#ff00ff');
    agregarDatoB('P6', 4, '#00ffff');
    agregarDatoB('P7', 7, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 2, '#0033ff');
    agregarDatoB('P10', 4, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 6, '#ff0033');
    agregarDatoB('P15', 6, '#00ff33');
    agregarDatoB('P16', 3, '#00ff33');
    agregarDatoB('P17', 3, '#00ff33');
    agregarDatoB('P18', 2, '#00ff33');
    agregarDatoB('P19', 2, '#00ff33');
    agregarDatoB('P20', 4, '#00ff33');
}

function agregarDatosIE8() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 1, '#0d8cbc');
    

    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 0, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 1, '#3300ff');
    agregarDatoB('P11', 1, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');
    agregarDatoB('P16', 2, '#00ff33');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 2, '#00ff33');
    agregarDatoB('P20', 2, '#00ff33');

}

function agregarDatosIE9() {
    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 0, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 0, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 1, '#00ff33');
    agregarDatoB('P16', 0, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 1, '#00ff33');
}

function agregarDatosIE10() {
    
    
    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 1, '#ff00ff');
    agregarDatoB('P6', 1, '#00ffff');
    agregarDatoB('P7', 0, '#ff0033');
    agregarDatoB('P8', 1, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 0, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 0, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
    agregarDatoB('P16', 0, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 1, '#00ff33');
    agregarDatoB('P20', 1, '#00ff33');

}


function agregarDatosIE11() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 0, '#049974');
    agregarDato('P6', 1, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 1, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 1, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 0, '#0d8cbc');


    
    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 2, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 2, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 2, '#00ff33');
    agregarDatoB('P13', 0, '#3300ff');
    agregarDatoB('P14', 2, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 2, '#00ff33');
    agregarDatoB('P19', 1, '#00ff33');
    agregarDatoB('P20', 3, '#00ff33');
}


function agregarDatosIE13() {
    
    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 0, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 0, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 1, '#00ff33');

}

function agregarDatosIE14() {
    agregarDatoB('P4', 1, '#ffff00');
    agregarDatoB('P5', 0, '#ff00ff');
    agregarDatoB('P6', 0, '#00ffff');
    agregarDatoB('P7', 1, '#ff0033');
    agregarDatoB('P8', 0, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 0, '#3300ff');
    agregarDatoB('P11', 0, '#ff3300');
    agregarDatoB('P12', 0, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 1, '#ff0033');
    agregarDatoB('P15', 0, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 1, '#00ff33');
}

function agregarDatosIE15() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 2, '#049974');
    agregarDato('P6', 2, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 0, '#07d58c');
    agregarDato('P9', 2, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 0, '#0d8cbc');
    agregarDato('P16', 0, '#0d8cbc');


    agregarDatoB('P4', 2, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 5, '#00ffff');
    agregarDatoB('P7', 5, '#ff0033');
    agregarDatoB('P8', 3, '#33ff00');
    agregarDatoB('P9', 1, '#0033ff');
    agregarDatoB('P10', 3, '#3300ff');
    agregarDatoB('P11', 3, '#ff3300');
    agregarDatoB('P12', 3, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 5, '#00ff33');
    agregarDatoB('P16', 2, '#00ff33');
    agregarDatoB('P17', 0, '#00ff33');
    agregarDatoB('P18', 0, '#00ff33');
    agregarDatoB('P19', 2, '#00ff33');
    agregarDatoB('P20', 3, '#00ff33');
}
function agregarDatosIE16() {
    agregarDato('P4', 0, '#03886c');
    agregarDato('P5', 1, '#049974');
    agregarDato('P6', 0, '#05ab7c');
    agregarDato('P7', 0, '#06bd84');
    agregarDato('P8', 1, '#07d58c');
    agregarDato('P9', 1, '#08e994');
    agregarDato('P10', 0, '#09f79c');
    agregarDato('P11', 0, '#0affa4');
    agregarDato('P12', 0, '#0bb7ac');
    agregarDato('P13', 0, '#0cafb4');
    agregarDato('P14', 0, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');
    agregarDato('P15', 1, '#0d8cbc');


    agregarDatoB('P4', 0, '#ffff00');
    agregarDatoB('P5', 2, '#ff00ff');
    agregarDatoB('P6', 2, '#00ffff');
    agregarDatoB('P7', 2, '#ff0033');
    agregarDatoB('P8', 1, '#33ff00');
    agregarDatoB('P9', 0, '#0033ff');
    agregarDatoB('P10', 2, '#3300ff');
    agregarDatoB('P11', 1, '#ff3300');
    agregarDatoB('P12', 1, '#00ff33');
    agregarDatoB('P13', 1, '#3300ff');
    agregarDatoB('P14', 3, '#ff0033');
    agregarDatoB('P15', 3, '#00ff33');
    agregarDatoB('P16', 1, '#00ff33');
    agregarDatoB('P17', 1, '#00ff33');
    agregarDatoB('P18', 1, '#00ff33');
    agregarDatoB('P19', 0, '#00ff33');
    agregarDatoB('P20', 2, '#00ff33');

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
