// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man'
}
// Defined the information on the array.

function showSubject() {
  alert(subject.name + ', ' + subject.room)
}
// Show the subject name and the room.

function changeSubject() {
  let newName = 'Typing Skills'
  subject.name = newName
}
// Redefind the subject name on the array.

function changeTeacher() {
  let newTeacher = prompt('What is the new teacher name?')
  subject.teacher = newTeacher
}
// Asked the new Teacher's name and redefind the teacher name on the array.