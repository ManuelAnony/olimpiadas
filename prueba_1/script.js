document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var ctxPie = document.getElementById('pieChart').getContext('2d');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'obtener_datos.php', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);

      var labels = data.labels;
      var values = data.values;
      var colors = data.colors;

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Suma',
            data: values,
            backgroundColor: colors,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: false,
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.parsed.y + ' (' + context.dataset.label + ')';
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0
              }
            }
          }
        }
      });

      var pieChart = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: colors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false,
            tooltip: false
          }
        }
      });
    }
  };
  xhr.send();
});
