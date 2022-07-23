let howTo = document.querySelector('#menu > div:last-child > h2 ')
console.log(howTo)

howTo.addEventListener('click', showRules)

function showRules() {
  let hideList = document.querySelectorAll(
    '#menu > div:first-child, #menu > hr'
  )
  hideList.forEach(function (el) {
    el.toggleAttribute('hidden')
  })
}
