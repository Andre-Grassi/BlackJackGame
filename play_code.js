const cards_url = '../Images/cards_images'
const DECK = {
  clubs: [
    ['ace', `${cards_url}/clubs/c_ace.png`],
    ['two', `${cards_url}/clubs/c_two.png`],
    ['three', `${cards_url}/clubs/c_three.png`],
    ['four', `${cards_url}/clubs/c_four.png`],
    ['five', `${cards_url}/clubs/c_five.png`],
    ['six', `${cards_url}/clubs/c_six.png`],
    ['seven', `${cards_url}/clubs/c_seven.png`],
    ['eight', `${cards_url}/clubs/c_eght.png`],
    ['nine', `${cards_url}/clubs/c_nine.png`],
    ['ten', `${cards_url}/clubs/c_ten.png`],
    ['jack', `${cards_url}/clubs/c_jack.png`],
    ['queen', `${cards_url}/clubs/c_queen.png`],
    ['king', `${cards_url}/clubs/c_king.png`]
  ],
  spades: [
    ['ace', `${cards_url}/spades/s_ace`],
    ['two', `${cards_url}/spades/s_two`],
    ['three', `${cards_url}/spades/s_three`],
    ['four', `${cards_url}/spades/s_four`],
    ['five', `${cards_url}/spades/s_five`],
    ['six', `${cards_url}/spades/s_six`],
    ['seven', `${cards_url}/spades/s_seven`],
    ['eight', `${cards_url}/spades/s_eght`],
    ['nine', `${cards_url}/spades/s_nine`],
    ['ten', `${cards_url}/spades/s_ten`],
    ['jack', `${cards_url}/spades/s_jack`],
    ['queen', `${cards_url}/spades/s_queen`],
    ['king', `${cards_url}/spades/s_king`]
  ]
}

class Card {
  constructor(suit, name) {
    this.url = getCardUrl(suit, name)
    this.suit = suit
    this.name = name
    removeCard(suit, name)
  }
}

// Impure function (card is outside of this function and is not passed as an argument)
// Function to get the URL of the image of the card passed
function getCardUrl(suit, name) {
  // Iterates over suits of DECK object (for-in: iterates over properties of an object)
  for (const suit_property in DECK) {
    // Checks if the suit iterated is equal to the suit passed as arg
    if (suit_property == suit) {
      // Iterates over the arrays that the specified suit has (for-of: iterates over elements of an array-like object)
      for (const el of DECK[suit]) {
        // If the element name (el[0]) is equal to the card name passed then return the URL of the given card (array = [name, URL])
        if (el[0] == name) {
          return el[1]
        }
      }
    }
  }
}

// Function to remove the card selected from the deck of cards, so it can't be picked again
function removeCard(suit, name) {
  // Iterates over suits of DECK object (for-in: iterates over properties of an object)
  for (const suit_property in DECK) {
    // Checks if the suit iterated is equal to the suit passed as arg
    if (suit_property == suit) {
      // Iterates over the arrays that the specified suit has (for-of: iterates over elements of an array-like object)
      for (const el of DECK[suit]) {
        // If the element name (el[0]) is equal to the card name passed then return the URL of the given card (array = [name, URL])
        if (el[0] == name) {
          // Gets the index of the specified card inside of the arrays of the suit passed as argument, then splice, which is a prototype used to replace a part of the array by something, and in this case I am replacing it for nothing, in other words I am deleting the element passed as argument from the array
          DECK[suit].splice(DECK[suit].indexOf(el), 1)
        }
      }
    }
  }
}

// Player's hand and Dealer's hand declaration
let playerHand = []
let dealerHand = []

// Hit button
const hitBtn = document.getElementById('hit')

hitBtn.addEventListener('click', addCard)

// Declares variables that will be true if the player made the specific choice, or false in case he didn't
let hit = false
let stand = false

function addCard(hand) {
  /* If the arg passed is not dealerHand then it's the playerHand (added this because playerHand can't be passed as an arg in the eventListener) */
  if (hand != dealerHand) {
    // Checks if player has already made his choice
    if (hit == true || stand == true) return

    hand = playerHand
    hit = true
  }

  // Gets a random card from the deck
  nextCard = getRandCard()
  // Push the random card into the hand
  hand.push(nextCard)

  showCard(nextCard, hand)
}

function getRandCard() {
  const suit = getRandSuit()
  const name = getRandName()

  return new Card(suit, name)
}

function getRandSuit() {
  const index = Math.floor(Math.random() * 4)

  switch (index) {
    case 0:
      return 'clubs'

    case 1:
      return 'spades'

    case 2:
      return 'diamonds'

    case 3:
      return 'hearts'

    default:
      throw new Error("Couldn't return any suit")
  }
}

function getRandName() {
  const index = Math.floor(Math.random() * 13)

  switch (index) {
    case 0:
      return 'ace'

    case 1:
      return 'two'

    case 2:
      return 'three'

    case 3:
      return 'four'

    case 4:
      return 'five'

    case 5:
      return 'six'

    case 6:
      return 'seven'

    case 7:
      return 'eight'

    case 8:
      return 'nine'

    case 9:
      return 'ten'

    case 10:
      return 'jack'

    case 11:
      return 'queen'

    case 12:
      return 'king'

    default:
      throw new Error("Couldn't return any name")
  }
}

let playerHandTag = document.querySelector('#player > .hand')
let dealerHandTag = document.querySelector('#dealer > .hand')

function showCard(card, hand) {
  if (hand == playerHand) {
    playerHandTag.innerHTML =
      playerHandTag.innerHTML + `<img class="card" src="${card.url}"></img>`
    console.log(card.url)
  }
}
