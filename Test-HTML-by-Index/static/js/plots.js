
function createPlot(indexNumber) { 
     d3.json("data/combined_bodycomp_age.json").then((importedData) => {
       // console.log(importedData)

      // Setting age, height, and weight as the xvalue
      var xValue = ['Age', 'Height', 'Weight'];


      // Setting yvalue
      var yValue1 = [importedData[indexNumber].age,importedData[indexNumber].height, importedData[indexNumber].weight]
      var yValue2 = [importedData[indexNumber +1].age,importedData[indexNumber + 1].height, importedData[indexNumber + 1].weight]
      var yValue3 = [importedData[indexNumber + 2].age,importedData[indexNumber +2].height, importedData[indexNumber +2].weight]

      // Setting textvalue 
      var textValue1 = (importedData[indexNumber].event + " for "+ "<br>" + importedData[indexNumber].country + " in " + importedData[indexNumber].year)
      var textValue2 = (importedData[indexNumber +1].event + " for "+ "<br>" + importedData[indexNumber +1].country + " in " + importedData[indexNumber +1].year)
      var textValue3 = (importedData[indexNumber +2].event + " for "+ "<br>" + importedData[indexNumber +2].country + " in " + importedData[indexNumber +2].year)

    // ONLY GETS THE FIRST THREE IN INDEX - WANT TO GET FIRST THREE UNIQUE eventS
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


