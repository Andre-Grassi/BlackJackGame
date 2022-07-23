let howTo = document.querySelector('#menu > div:last-child > h2 ')
console.log(howTo)

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
