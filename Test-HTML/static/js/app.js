
///////////////////////////////////////////////////////////////////////////////////
// Autofill Filter table options
///////////////////////////////////////////////////////////////////////////////////

// Setting variable for optionChanged() metaDataIndex
var metaDataIndex;

// Populate dropdown options with the participant id names
d3.json("data/combined_bodycomp_age.json").then((athleteData) => {
	// console.log(athleteData)

	function filteredTableOptions(htmlId, athleteDataKey) {

	  // Select the date element and get the raw HTML node
	  var filterOption = d3.select(htmlId);

	  // Make a new array with only unique values and populate dropdown options with those values
	  var populatedOptions = Array.from(new Set(athleteData.map(athleteDataKey)));
	  populatedOptions.forEach(option => filterOption.append('option').attr('value', option).text(option));
	};

	// Calling function to auto populate dropdown options
	filteredTableOptions('#Sport', (item => item.Sport));
	filteredTableOptions('#Event', (item => item.Event));
	filteredTableOptions('#Year', (item => item.Year));
	filteredTableOptions('#Country', (item => item.Country));
	filteredTableOptions('#Sex', (item => item.Sex));

}); 

///////////////////////////////////////////////////////////////////////////////////
// // function optionChanged() {
//   // Setting index number for creatingMetaData() and createPlot()
//   function setIndexNum(value) {
    d3.json("data/combined_bodycomp_age.json").then((importedData) => {
      for(var i = 0; i < importedData.length; i++) {
      		// console.log(importedData[i].Sport)
      		// console.log(importedData[i].Event)
      		// console.log(importedData[i].Year)
      		// console.log(importedData[i].Age)
      		// console.log(importedData[i].Height)
      		// console.log(importedData[i].Weight)
      		// console.log([importedData[i].Age,importedData[i].Height, importedData[i].Weight])
      		// console.log("first i:" + i)
      		// console.log("second i:" + (i + 1))
      		// console.log("third i:" + (i + 2))
      }
//       // Setting metaDataIndex as indexNumber
//       // indexNumber = metaDataIndex

//       // Calling creatingMetaData()
//       // creatingMetaData (indexNumber)
//       // console.log("creatingMetaData() in optionChanged() indexNumber = " + indexNumber)
    
//       // Calling createPlot()
//       // createPlot (indexNumber)
//       // console.log("createPlot() in optionChanged() indexNumber = " + indexNumber)
    });
//   }
//   setIndexNum(0)
//   // // var dropDownoption = filterOption.node().value
//   // setIndexNum(Number(dropDownoption))
// // }



