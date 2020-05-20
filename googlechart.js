

// function drawChart() {
//     // Define the chart to be drawn.
//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Element');
//     data.addColumn('number', 'Percentage');
//     data.addRows([
//       ['learner', 0.78],
//       ['Oxygen', 0.21],
//       ['Other', 0.01]
//     ]);



  // Create the data table.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Topping');
//   data.addColumn('number', 'Slices');
//   data.addRows([
//     ['Mushrooms', 3],
//     ['Onions', 1],
//     ['Olives', 1],
//     ['Zucchini', 1],
//     ['Pepperoni', 2]
//   ]);
function drawChart() {
    var container = document.getElementById('container');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Software Developer', new Date(2019, 5, 20), new Date(2020, 5, 20) ],
      [ 'Teacher', new Date(2013, 6, 30),  new Date(2018, 12, 31) ],
      [ 'Farm-to-School Coordinator',  new Date(2009, 3, 21),  new Date(2011, 4, 21) ],
      [ 'Program Coordinator',  new Date(2005, 12, 05),  new Date(2009, 3, 21) ],
      [ 'Restaurant Life',  new Date(1998, 9, 28),  new Date(2012, 12, 21) ]]);

    chart.draw(dataTable);
  }

  // Instantiate and draw the chart.
//   var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
//   chart.draw(data, null);
