//  FOR - BY FILTER
// Did not change from table to chart
// data.js has var data = 


// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

// function buildCharts(data) {
//      d3.json("data/combined_bodycomp_age.json").then((importedData) => {
//        // console.log(importedData)

//       // Setting age, height, and weight as the xvalue
//       var xValue = ['Age', 'Height', 'Weight'];


//       // Setting yvalue
//       var yValue1 = [importedData.age,importedData.height, importedData.weight]
//       var yValue2 = [importedData.age,importedData.height, importedData.weight]
//       var yValue3 = [importedData.age,importedData.height, importedData.weight]

//       // Setting textvalue 
//       var textValue1 = (importedData.event + " for "+ "<br>" + importedData.country + " in " + importedData.year)
//       var textValue2 = (importedData.event + " for "+ "<br>" + importedData.country + " in " + importedData.year)
//       var textValue3 = (importedData.event + " for "+ "<br>" + importedData.country + " in " + importedData.year)

//     // ONLY GETS THE FIRST THREE IN INDEX - WANT TO GET FIRST THREE UNIQUE eventS
//       function barChart1() {


//         var barChart = {
//           name: "Gold",
//           x: xValue,
//           y: yValue1,
//           type: 'bar',
//           text: yValue1.map(String),
//           textposition: 'auto',
//           hoverinfo: 'none',
//           opacity: 0.5,
//           marker: {
//             color: 'rgba(218,165,32,.7)',
//             line: {
//               color: 'rgba(218,165,32,1)',
//               width: 1.5
//             }
//           }
//         };

//         var layout = {
//           title: {
//             text: textValue1,
//             font: {
//               size: 12,
//             }},
//           autosize: false,
//           width: 250,
//           height: 500,
//           margin: {
//             l: 50,
//             r: 50,
//             b: 100,
//             t: 100,
//             pad: 4},
//           xaxis: {
//             title: {
//               text: '(Metric System)',
//               font: {
//                 size: 10,
//               }}}
//         };

//         Plotly.newPlot("plot1", [barChart], layout);
//       }
      
//       function barChart2() {
//         var barChart = {
//           name: "Gold",
//           x: xValue,
//           y: yValue2,
//           type: 'bar',
//           text: yValue2.map(String),
//           textposition: 'auto',
//           hoverinfo: 'none',
//           opacity: 0.5,
//           marker: {
//             color: 'rgba(218,165,32,.7)',
//             line: {
//               color: 'rgba(218,165,32,1)',
//               width: 1.5
//             }
//           }
//         };

//         var layout = {
//           title: {
//             text: textValue2,
//             font: {
//               size: 12,
//             }},
//           autosize: false,
//           width: 250,
//           height: 500,
//           margin: {
//             l: 50,
//             r: 50,
//             b: 100,
//             t: 100,
//             pad: 4},
//           xaxis: {
//             title: {
//               text: '(Metric System)',
//               font: {
//                 size: 10,
//               }}}
//         };

//         Plotly.newPlot("plot2", [barChart], layout);
//       }
      

//       function barChart3() {
//         var barChart = {
//           name: "Gold",
//           x: xValue,
//           y: yValue3,
//           type: 'bar',
//           text: yValue3.map(String),
//           textposition: 'auto',
//           hoverinfo: 'none',
//           opacity: 0.5,
//           marker: {
//             color: 'rgba(218,165,32,.7)',
//             line: {
//               color: 'rgba(218,165,32,1)',
//               width: 1.5
//             }
//           }
//         };

//         var layout = {
//           title: {
//             text: textValue3,
//             font: {
//               size: 12,
//             }},
//           autosize: false,
//           width: 250,
//           height: 500,
//           margin: {
//             l: 50,
//             r: 50,
//             b: 100,
//             t: 100,
//             pad: 4},
//           xaxis: {
//             title: {
//               text: '(Metric System)',
//               font: {
//                 size: 10,
//               }}}
//         };

//         Plotly.newPlot("plot3", [barChart], layout);
//       }
//       barChart1();
//       barChart2();
//       barChart3();
//     }); 
// }



// Keep Track of all filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);



  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
