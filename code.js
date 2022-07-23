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

  isActive = isActive == false ? true : false

  // Hide elements to open space for text
  hideList.forEach(function (el) {
    el.toggleAttribute('hidden')
  })

  // Get menu's section
  let menu = document.getElementById('menu')
  menuStyle = menu.style

  if (isActive == true) menuStyle.backgroundImage = 'none' //disable background
  else {
    // Re-enable background
    menuStyle.backgroundImage = 'url(Images/clover.png), url(Images/spade.png)'
  }
}

// Selecting rules pages
let backArrow = document.getElementById('back')
let advanceArrow = document.getElementById('advance')

backArrow.addEventListener('click', back)
advanceArrow.addEventListener('click', advance)

let pages = 0
function advance() {
  ++pages
  switch (pages) {
    case 1:
      textRules.textContent =
        'You receive two cards face up. The dealer also receives two cards - one of them face up, the other face down.'
      break

    case 2:
      textRules.innerHTML =
        'Decide whether to <strong>Hit</strong> (Ask the dealer for another card) or <strong>Stand</strong> (the dealer will reveal their facedown card).'
      break

    case 3:
      textRules.innerHTML =
        "See who is the <strong>winner</strong>: If your hand is closer to 21 than that of the dealer, you <strong>win</strong>. If the dealer has 21 or a closer score to 21 than you, then you've <strong>lost</strong>"
      break
  }
}
