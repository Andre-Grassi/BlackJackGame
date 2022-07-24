// Header
let howTo = document.querySelector('#menu > div:last-child > h2 ')
console.log(howTo)

// Text teaching how to play
let textRules = document.querySelector('blockquote')

howTo.addEventListener('click', showRules)

let isActive = false
function showRules() {
  let hideList = document.querySelectorAll(
    '#menu > div:first-child, #menu > hr'
  )

  // If the rules are shown, then isActive = true, otherwise it's false
  isActive = isActive == false ? true : false

  // Hide elements to open space for text / Show elements if the user goes back
  hideList.forEach(function (el) {
    el.toggleAttribute('hidden')
  })

  // Show text teaching how to play / Hide text if the user goes back
  let howToPlayText = document.getElementById('how-to')
  howToPlayText.toggleAttribute('hidden')

  // Get menu's section
  let menu = document.getElementById('menu')
  menuStyle = menu.style

  // If text is shown, disable background and change the text of the h2 to 'Menu' (so the user can see how to come back to the menu), otherwise show it and change the header's text to 'How to play' again
  // Disable background, changes header's text
  if (isActive == true) {
    menuStyle.backgroundImage = 'none'
    howTo.textContent = 'Menu'
  } else {
    // Re-enable background, changes header's text
    menuStyle.backgroundImage = 'url(Images/clover.png), url(Images/spade.png)'
    howTo.textContent = 'How to play'
  }
}

// Selecting rules pages
let backArrow = document.getElementById('back')
let advanceArrow = document.getElementById('advance')

// Adding click events
backArrow.addEventListener('click', back)
advanceArrow.addEventListener('click', advance)

// Disabling back arrow on the first page
backArrow.style.display = 'none'
backArrow.setAttribute('hidden', 'true')

// Variable that indicates which page the user is on
let pages = 0
function advance() {
  // If statement only to be 100% certain that the user will be unable to advance to pages that don't exist
  if (pages >= 3) {
    pages = 3
    return
  }

  ++pages
  selectText(pages)
}

function back() {
  if (pages <= 0) {
    pages = 0
    return
  }

  --pages
  selectText(pages)
}

// Function to modify the text of each page of the rules explanation
function selectText(pages) {
  switch (pages) {
    case 0:
      textRules.textContent = texts[0]

      // Disable back arrow
      // Hidden doesn't work if display is block, so changes it to none first (it also works if it's inline and flex)
      backArrow.style.display = 'none'
      backArrow.setAttribute('hidden', 'true')

      // Enable advance arrow
      advanceArrow.style.display = 'inline-block'
      advanceArrow.removeAttribute('hidden')
      break

    case 1:
      textRules.textContent = texts[1]

      backArrow.style.display = 'inline-block'
      backArrow.removeAttribute('hidden')
      break

    case 2:
      textRules.innerHTML = texts[2]
      break

    case 3:
      textRules.innerHTML = texts[3]

      advanceArrow.style.display = 'none'
      advanceArrow.setAttribute('hidden', 'true')
  }
}

// Text of each page
let texts = [
  'The goal of blackjack is simple - to get as close as possible to  21 without going over, and to have a higher hand than the dealer. If the dealer goes over 21, they bust and lose the game. The same goes for you.',
  'You receive two cards face up. The dealer also receives two cards - one of them face up, the other face down.',
  'Decide whether to <strong>Hit</strong> (Ask the dealer for another card) or <strong>Stand</strong> (the dealer will reveal their facedown card).',
  "See who is the <strong>winner</strong>: If your hand is closer to 21 than that of the dealer, you <strong>win</strong>. If the dealer has 21 or a closer score to 21 than you, then you've <strong>lost</strong>"
]
