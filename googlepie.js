//  Create the data table.
function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'daily');
    data.addColumn('number', 'slices');
    data.addRows([
        ['Sleep', 3],
        ['Code', 2],
        ['Job Apps', 1],
        ['Cook', 1],
        ['Clean', .5],
        ['Garden', .5],
        ['Run', 1]
    ]);

    var options = {
        title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
  // Instantiate and draw the chart.
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, null);
// }