let d = 0
const quater = 0.25
let cir = 0
let area = 0
// Let makes the variables.//

document.getElementById('a').addEventListener('click', ar)
// This line connects the the Area button to the right calculation.//

document.getElementById('c').addEventListener('click', ci)
// his line connects the the Circumference button to the right calculation.//

function ar () {
  d = document.getElementById('d').value

  area = parseInt(area)

  d = parseInt(d)

  area = quater * Math.PI * d * d

  document.getElementById('area').innerHTML = area
}
// These are for the equation and putting the answer on screen.//

function ci () {
  d = document.getElementById('d').value

  cir = parseInt(cir)

  d = parseInt(d)

  cir = Math.PI * d

  document.getElementById('cir').innerHTML = cir
}
// These are for the equation and putting the answer on screen.//
