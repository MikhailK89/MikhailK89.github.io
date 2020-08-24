const imgs = document.getElementsByClassName('img')
let isOpened = false

Object.keys(imgs).forEach(key => {
  imgs[key].addEventListener('click', (event) => {
    const card = event.target.closest('.card')
    if (card.classList.contains('extend')) {
      card.classList.remove('extend')
      isOpened = false
    } else {
      if (isOpened) {
        return
      }
      card.classList.add('extend')
      isOpened = true
    }
  })
})
