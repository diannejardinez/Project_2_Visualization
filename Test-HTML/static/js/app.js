


///////////////////////////////////////////////////////////////////////////////////
// Autofill Filter table options
///////////////////////////////////////////////////////////////////////////////////

//Setting  data to athleteData
var athleteData = male_gold_dict; 
// var athleteData = female_gold_dict;
 
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




// ///////////////////////////////////////////////////////////////////////////////////
// // Autofill Filter table options
// ///////////////////////////////////////////////////////////////////////////////////

// d3.csv("Female-Events/olympics_female_gold_bodycomp_age.csv").then(function(athletesData) {
// 	console.log(athletesData);
// }).catch(function(error) {
//     console.log(error);
// });


