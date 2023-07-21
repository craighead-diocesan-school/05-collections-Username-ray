// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Math',
  'Science',
]
// Defined the subjects in the array.

function showSubjects() {
  alert(subjects)
}
// Show the all subjects.

function addSubject() {
  let newSubject = prompt('What subject do you want to add to the array?')
  while ('stop' != newSubject){
    // Since it was written 'stop', continues asking and adding the subjects.
    subjects.push(newSubject)
    alert(newSubject + ' was added.')
    newSubject = prompt('What subject do you want to add to the array?')
  }
  // Ask the subjects want to add the array and added the subjcts.
}

function removeSubject() {
  let index = prompt("Give me a number to delete")
  let arrayLength = index.length
  if (arrayLength > 0){
  subjects.splice(index, 1)
  }
  // Ask the subjects want to delete from the array and continue since array will be empty.
}










