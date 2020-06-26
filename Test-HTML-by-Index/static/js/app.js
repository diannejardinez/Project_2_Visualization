//  FOR - BY INDEX ////////////////////////
// Only goes by event index number



var filterOption = d3.select('#event');

// Setting global variable for optionChanged() metaDataIndex
var metaDataIndex;



// Populate dropdown options with the participant id names
d3.json("data/combined_bodycomp_age.json").then((athleteData) => {
	console.log(athleteData)

	function filteredTableOptions(htmlId, athleteDataKey) {

	  // Select the date element and get the raw HTML node
	  var filterOption = d3.select(htmlId);

	  // Make a new array with only unique values and populate dropdown options with those values
	  var populatedOptions = Array.from(new Set(athleteData.map(athleteDataKey)));
	  populatedOptions.forEach(option => filterOption.append('option').attr('value', option).text(option));
	};

	// Calling function to auto populate dropdown options
	filteredTableOptions('#sport', (item => item.sport));
	filteredTableOptions('#event', (item => item.event));
	filteredTableOptions('#year', (item => item.year));
	filteredTableOptions('#country', (item => item.country));
	filteredTableOptions('#sex', (item => item.sex));

}); 



// Function for selecting an option in the dropwdown section
function optionChanged() {
  // Setting index number for creatingMetaData() and createPlot()
  function setIndexNum(value) {
    d3.json("data/combined_bodycomp_age.json").then((importedData) => {
      for(var i = 0; i < importedData.length; i++) {
          // console.log("the event is: " + importedData[i].event+ "the index is:" + i)
        if((importedData[i].event) == value) {


          metaDataIndex = i;
          console.log(("metaDataIndex is: " + i))
        }
      }
      // Setting metaDataIndex as indexNumber
      indexNumber = metaDataIndex

      // Calling createPlot()
      createPlot(indexNumber)
      // console.log("createPlot() in optionChanged() indexNumber = " + indexNumber)
    });
  }
  var dropDownoption = filterOption.node().value
  setIndexNum(Number(dropDownoption))

}




function init() {
      // Setting index to 0
      indexNumber = 2014

      // Calling createPlot()
      createPlot(indexNumber)
      // console.log("createPlot() in init() indexNumber = " + indexNumber)
}
init()


function createPlot(indexNumber) { 
     d3.json("data/combined_bodycomp_age.json").then((importedData) => {
       // console.log(importedData[0].age)

      // Setting age, height, and weight as the xvalue
      var xValue = ['Age', 'Height', 'Weight'];


      // Setting yvalue
      var yValue1 = [importedData[indexNumber].age, importedData[indexNumber].height, importedData[indexNumber].weight]
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




