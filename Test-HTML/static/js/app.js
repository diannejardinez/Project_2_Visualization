


///////////////////////////////////////////////////////////////////////////////////
// Autofill Filter table options
///////////////////////////////////////////////////////////////////////////////////

//Setting  data to ufoData
var ufoData = data;
 
function filteredTableOptions(htmlId, ufoDataKey) {

  // Select the date element and get the raw HTML node
  var filterOption = d3.select(htmlId);

  // Source Link to get unique values from UFO data for dropdown https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
  // Make a new array with only unique dates and populate dropdown options with those dates
  var populatedOptions = Array.from(new Set(ufoData.map(ufoDataKey)));
  populatedOptions.forEach(option => filterOption.append('option').attr('value', option).text(option));
};

// Calling function to auto populate dropdown options
filteredTableOptions('#datetime', (item => item.datetime));
filteredTableOptions('#city', (item => item.city));
filteredTableOptions('#state', (item => item.state));
filteredTableOptions('#country', (item => item.country));
filteredTableOptions('#shape', (item => item.shape));




// ///////////////////////////////////////////////////////////////////////////////////
// // Autofill Filter table options
// ///////////////////////////////////////////////////////////////////////////////////

// d3.csv("Female-Events/olympics_female_gold_bodycomp_age.csv").then(function(athletesData) {
// 	console.log(athletesData);
// }).catch(function(error) {
//     console.log(error);
// });


// //Setting  data to athletesData
// var athletesData = data;
 
// function filteredTableOptions(htmlId, athletesDataKey) {

//   // Select the date element and get the raw HTML node
//   var filterOption = d3.select(htmlId);

//   // Source Link to get unique values from UFO data for dropdown https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
//   // Make a new array with only unique dates and populate dropdown options with those dates
//   var populatedOptions = Array.from(new Set(athletesData.map(athletesDataKey)));
//   populatedOptions.forEach(option => filterOption.append('option').attr('value', option).text(option));
// };

// // Calling function to auto populate dropdown options
// filteredTableOptions('#datetime', (item => item.datetime));
// filteredTableOptions('#city', (item => item.city));
// filteredTableOptions('#state', (item => item.state));
// filteredTableOptions('#country', (item => item.country));
// filteredTableOptions('#shape', (item => item.shape));



// Steps to do:
// Get data in 
  
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },

// Might work with D3

// then map the filters that way