// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Math',
  'Science',
]

function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let newSubject = prompt('What subject do you want to add to the array?')
  while ('stop' != newSubject){
    subjects.push(newSubject)
    alert(newSubject + ' was added.')
    newSubject = prompt('What subject do you want to add to the array?')
  }
}

function removeSubject() {
  let index = prompt("Give me a number to delete")
  let arrayLength = index.length
  if (arrayLength > 0){
  subjects.splice(index, 1)
  }
}










