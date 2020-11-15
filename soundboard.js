var Alert = document.getElementById('Alert')
var Logon = document.getElementById('Logon')
var Errors = document.getElementById('Errors')

Alert.addEventListener('click', function () {
  var alertSound = new Audio('alert.wav');
  alertSound.play();
  })
Logon.addEventListener('click', function () {
  var startSound = new Audio('startup.wav');
  startSound.play();
  })
Errors.addEventListener('click', function () {
  var errorSound = new Audio('error.wav');
  errorSound.play();
  })


  Alert.addEventListener('mouseenter', function () {
    var alertSound = new Audio('keyclick.wav');
    alertSound.play();
    })
  Logon.addEventListener('mouseenter', function () {
    var startSound = new Audio('keyclick.wav');
    startSound.play();
    })
  Errors.addEventListener('mouseenter', function () {
    var errorSound = new Audio('keyclick.wav');
    errorSound.play();
    })