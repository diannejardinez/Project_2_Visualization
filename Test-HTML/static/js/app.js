
///////////////////////////////////////////////////////////////////////////////////
// Autofill Filter table options
///////////////////////////////////////////////////////////////////////////////////



//Setting global variable data to athleteData
var athleteData = athleteData; 

// Populate dropdown options with the participant id names
d3.json("static/js/combined_bodycomp_age.json").then((athleteData) => {
	console.log(athleteData)

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



// // // Populate dropdown options with the participant id names
// // d3.json("static/js/Export_DataFrame.json").then((importedData) => {
// // 	for(var i = 0; i < importedData.length; i++) {
// // 		var newSports = importedData[i].Sport
// // 			newSports.forEach(option => filterOption.append('option').attr('value', option).text(option));
// // 	console.log(importedData[i].Sport)
// // 	console.log(importedData[i].Event)
// // 	console.log(importedData[i].Year)


// // 	}
// //   // var newNames = importedData.names
// //   //   // console.log(newNames)
// //   //   newNames.forEach(option => filterOption.append('option').attr('value', option).text(option));
// // }); 


// // d3.json("static/js/Export_DataFrame.json").then((importedData) => {
// //   for(var i = 0; i < importedData.length; i++) {
// //       if((importedData[i].Event)['id'] === value) {
// //           console.log("i for setIndexNum() = " + i)
// //           metaDataIndex = i;
// //       }
// //   }
// //  });