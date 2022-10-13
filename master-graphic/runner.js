// Grabs gender and firm size from first dropdown pair
var select1 = document.getElementById('select-box-1').children

// Grabs each dropdown
var selectGender1 = select1[2]
var selectSize1 = select1[5]

// Gets the full list of options
var optionsGender1 = selectGender1.children
var optionsSize1 = selectSize1.children

// Sets the selected option (all genders, all sizes by default)
selectGender1.value = optionsGender1[0].value;
selectSize1.value = optionsSize1[0].value;

// Gets specific params for the loadData function, based on selected values
var params1 = document.querySelectorAll('.sb1')
var gender1 = params1[0].selectedOptions[0].innerText
var firmSize1 = params1[1].selectedOptions[0].value.split('-').map((d, i) => {
  return i == 0 ? d : d.slice(0, 1).toUpperCase() + d.slice(1, d.length)
}).join('')

// Renders top bars
loadData(gender1, firmSize1, 1)

// PART 2, DOES THE SAME THING AGAIN FOR THE BOTTOM BARS
// BUT WITH A TWIST! (randomly generated params, that's the twist)

// Grabs gender and firm size from second dropdown pair
var select2 = document.getElementById('select-box-2').children

// Grabs each dropdown
var selectGender2 = select2[2]
var selectSize2 = select2[5]

// Gets the full list of options
var optionsGender2 = selectGender2.children
var optionsSize2 = selectSize2.children

// generate a random number between 0 and the total amount of options
// the number will always be an index within the bounds of the array (options)
var randomGender = 0
var randomSize = 0

// ensure both selects don't load as All/All
while (randomGender === 0 && randomSize === 0) {
  randomGender = Math.floor(Math.random() * optionsGender2.length)
  randomSize = Math.floor(Math.random() * optionsSize2.length)
}

// set the value of the dropdown to a random option
selectGender2.value = optionsGender2[randomGender].value;
selectSize2.value = optionsSize2[randomSize].value;

// Gets specific params for the loadData function, based on selected values
var params2 = document.querySelectorAll('.sb2')
var gender2 = params2[0].selectedOptions[0].innerText
var firmSize2 = params2[1].selectedOptions[0].value.split('-').map((d, i) => {
  return i == 0 ? d : d.slice(0, 1).toUpperCase() + d.slice(1, d.length)
}).join('')

// Renders bottom bars
loadData(gender2, firmSize2, 2)