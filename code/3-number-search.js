// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  100000,
  4444444,
  1234567890,
  99999,
  88888
]
// Defined the number of the array.

function searchNumbers() {
  let searchTarget = prompt('What number do you want to search the array for?')
  let searchResult = false
  // Define the search target is false.

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
        searchResult = true
    }
  }
  // Seach if the input is found in the array or not. And if it is, redefine the search target is true.

  if (searchResult == true) {
    alert('Yayyy! ' + searchTarget + ' was found!')
  } else {
    alert('Unfortunately, ' + searchTarget + ' was not found...')
  }
  // Shows a success message when the input was found, and show a failure message when the input was not found.
}
