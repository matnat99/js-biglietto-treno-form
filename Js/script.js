//Functions
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//DOM Elements
// Forms
const formElm = document.getElementById('form')
// Fields
const fullNameElm = document.getElementById('full-name')
const kmElm = document.getElementById('km')
const ageElm = document.getElementById('age')
const btnSubmitElm = document.getElementById('btn-submit')
const btnResetElm = document.getElementById('btn-reset')
// Ticket
const ticketElm = document.getElementById('ticket')
const passengerNameElm = document.getElementById('passenger-name')
const offerElm = document.getElementById('offer')
const wagonElm = document.getElementById('wagon')
const cpCodeElm = document.getElementById('cp-code')
const ticketPriceElm = document.getElementById('ticket-price')


const priceKm = 0.21

//DOM Events
formElm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = fullNameElm
  const km = Number(kmElm.value)
  const ageSelect = ageElm.value


  let totalPrice = km * priceKm
  let offer = "Biglietto Standard"

  //Applicazione sconti
  if (ageSelect === 'minorenne') {
    totalPrice *= 0.8
    offer = "Sconto Minorenni"
  } else if (ageSelect === 'over65') {
    totalPrice *= 0.6
    offer = "Sconto Over 65"
  }


  //Print
  passengerNameElm.innerHTML = fullName.value
  offerElm.innerHTML = offer
  wagonElm.innerHTML = getRndInteger(1,10)
  cpCodeElm.innerHTML = getRndInteger(10000,90000)
  ticketPriceElm.innerHTML = `€${totalPrice.toFixed(2)}`

  ticketElm.classList.remove('d-none')
});


btnResetElm.addEventListener('click', function(){
  ticketElm.classList.add('d-none')
})