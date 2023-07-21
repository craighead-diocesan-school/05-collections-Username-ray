// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'space doctor',
  'architect',
  'engeneer',
]
// Defined the jobs on the array.

function getJob() {
  let index = jobs[Math.floor(Math.random() * 5)]

  alert('Your future job will be ' + index + '.')
}
// Show a random job from the array.