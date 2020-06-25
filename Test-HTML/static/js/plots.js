     // d3.json("data/combined_bodycomp_age.json").then((importedData) => {
     //   // console.log(importedData)
     //  });




function createPlot (indexNumber) { 
     d3.json("data/combined_bodycomp_age.json").then((importedData) => {
       console.log(importedData)
      // // Use the map method with the arrow function to return all out_ids and their top 3 values
      // var newIds = importedData.samples.map(data=>(data.otu_ids).slice(0,3))

      // // Use the map method with the arrow function to return all sample_values and their top 3values
      // var newLabels = importedData.samples.map(data=>(data.otu_labels).slice(0,3))

      // // Use the map method with the arrow function to return all sample_values and their top 3 values
      // var newValues = importedData.samples.map(data=>(data.sample_values).slice(0,3))

      // // Getting the washing frequency



      // Setting Age, Height, and Weight as the xvalue
      var xValue = ['Age', 'Height', 'Weight'];


      // Setting yvalue
      var yValue1 = [importedData[indexNumber].Age,importedData[indexNumber].Height, importedData[indexNumber].Weight]
      var yValue2 = [importedData[indexNumber +1].Age,importedData[indexNumber + 1].Height, importedData[indexNumber + 1].Weight]
      var yValue3 = [importedData[indexNumber + 2].Age,importedData[indexNumber +2].Height, importedData[indexNumber +2].Weight]

      // Setting textvalue 
      var textValue1 = (importedData[indexNumber].Event + " for "+ "<br>" + importedData[indexNumber].Country + " in " + importedData[indexNumber].Year)
      var textValue2 = (importedData[indexNumber +1].Event + " for "+ "<br>" + importedData[indexNumber +1].Country + " in " + importedData[indexNumber +1].Year)
      var textValue3 = (importedData[indexNumber +2].Event + " for "+ "<br>" + importedData[indexNumber +2].Country + " in " + importedData[indexNumber +2].Year)

      //  TO GET TOP 3 FOR EACH SPORT, NEED TO HAVE BAR CHARTS SLICED FROM 0, 1, 2
    // WORKS- BUT ONLY GETS THE FIRST THREE IN INDEX - WANT TO GET FIRST THREE UNIQUE EVENTS
      function barChart1() {


        var barChart = {
          name: "Gold",
          x: xValue,
          y: yValue1,
          type: 'bar',
          text: yValue1.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
          opacity: 0.5,
          marker: {
            color: 'rgba(218,165,32,.7)',
            line: {
              color: 'rgba(218,165,32,1)',
              width: 1.5
            }
          }
        };

        var layout = {
          title: {
            text: textValue1,
            font: {
              size: 12,
            }},
          autosize: false,
          width: 250,
          height: 500,
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4},
          xaxis: {
            title: {
              text: '(Metric System)',
              font: {
                size: 10,
              }}}
        };

        Plotly.newPlot("plot1", [barChart], layout);
      }
      
      function barChart2() {
        var barChart = {
          name: "Gold",
          x: xValue,
          y: yValue2,
          type: 'bar',
          text: yValue2.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
          opacity: 0.5,
          marker: {
            color: 'rgba(218,165,32,.7)',
            line: {
              color: 'rgba(218,165,32,1)',
              width: 1.5
            }
          }
        };

        var layout = {
          title: {
            text: textValue2,
            font: {
              size: 12,
            }},
          autosize: false,
          width: 250,
          height: 500,
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4},
          xaxis: {
            title: {
              text: '(Metric System)',
              font: {
                size: 10,
              }}}
        };

        Plotly.newPlot("plot2", [barChart], layout);
      }
      

      function barChart3() {
        var barChart = {
          name: "Gold",
          x: xValue,
          y: yValue3,
          type: 'bar',
          text: yValue3.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
          opacity: 0.5,
          marker: {
            color: 'rgba(218,165,32,.7)',
            line: {
              color: 'rgba(218,165,32,1)',
              width: 1.5
            }
          }
        };

        var layout = {
          title: {
            text: textValue3,
            font: {
              size: 12,
            }},
          autosize: false,
          width: 250,
          height: 500,
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4},
          xaxis: {
            title: {
              text: '(Metric System)',
              font: {
                size: 10,
              }}}
        };

        Plotly.newPlot("plot3", [barChart], layout);
      }
      barChart1();
      barChart2();
      barChart3();
    }); 
}
createPlot(10) 


