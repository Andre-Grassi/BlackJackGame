const cards_url = '../Images/cards_images'
const cards = {
  clubs: [
    ['ace', `${cards_url}/clubs/c_ace`],
    ['two', `${cards_url}/clubs/c_two`],
    ['three', `${cards_url}/clubs/c_three`],
    ['four', `${cards_url}/clubs/c_four`],
    ['five', `${cards_url}/clubs/c_five`],
    ['six', `${cards_url}/clubs/c_six`],
    ['seven', `${cards_url}/clubs/c_seven`],
    ['eight', `${cards_url}/clubs/c_eght`],
    ['nine', `${cards_url}/clubs/c_nine`],
    ['ten', `${cards_url}/clubs/c_ten`],
    ['jack', `${cards_url}/clubs/c_jack`],
    ['queen', `${cards_url}/clubs/c_queen`],
    ['king', `${cards_url}/clubs/c_king`]
  ]
}

class Card {
  constructor(suit, name) {
    this.url = getCardUrl(suit, name)
    this.suit = suit
    this.name = name
  }
}

// Impure function (card is outside of this function and is not passed as an argument)
// Function to get the URL of the image of the card passed
function getCardUrl(suit, name) {
  // Iterates over suits of cards object
  for (const suit_property in cards) {
    // Checks if the suit iterated is equal to the suit passed as arg
    if (suit_property == suit) {
      // Iterates over the elements of the array that each suit has
      cards[suit].forEach(el => {
        // If the element is equal to the card name passed then return the URL of the given card (array = [name, URL])
        if (el == name) return el[1]
      })
    }
  }
}

let card1 = new Card('clubs', 'ace')

// const cards = ['clubs'][('ace', 'cards_images_url+/clubs/c_ace')][
//   ('eight', `${cards_images_url}/clubs/c_eight`)
// ]

// console.log(cards[0][0])

console.log(cards.clubs[0][1])

// switch (name) {
//   case 'ace':
//     return cards.clubs[0][1]

//   case 'two':
//     return cards.clubs[0][2]

//   case 'three':
//     return cards.clubs[0][3]

//   case 'four':
//     return cards.clubs[0][4]

//   case 'ace':
//     return cards.clubs[0][1]

//   case 'two':
//     return cards.clubs[0][2]

//   case 'three':
//     return cards.clubs[0][3]

//   case 'four':
//     return cards.clubs[0][4]
// }
