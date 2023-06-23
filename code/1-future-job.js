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

function getJob() {
  let index = jobs[Math.floor(Math.random() * 5)]

  alert('Your future job will be ' + index + '.')
}
