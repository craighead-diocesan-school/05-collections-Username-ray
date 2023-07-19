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

function searchNumbers() {
  let searchTarget = prompt('What number do you want to search the array for?')
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
        searchResult = true
    }
  }

  if (searchResult == true) {
    alert('Yayyy! ' + searchTarget + ' was found!')
  } else {
    alert('Unfortunately, ' + searchTarget + ' was not found...')
  }
  //
}
