//DOM Elements
// Forms
const formElm = document.getElementById('form')
// Fields
const fullNameElm = document.getElementById('full-name')
const kmElm = document.getElementById('km')
const ageElm = document.getElementById('age')
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

  const fullName = fullNameElm.value
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

  //Generazione numeri randomici
  const wagon = Math.floor(Math.random() * 10) + 1
  const cpCode = Math.floor(10000 + Math.random() * 90000)

  
  passengerNameElm.innerHTML = fullName
  offerElm.innerHTML = offer
  wagonElm.innerHTML = wagon
  cpCodeElm.innerHTML = cpCode
  ticketPriceElm.innerHTML = `€${totalPrice.toFixed(2)}`

  ticketElm.classList.remove('d-none')
});


