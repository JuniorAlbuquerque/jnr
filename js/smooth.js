class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links)
    this.addClickEvent()
  }

  handleClick(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
  }

  addClickEvent() {
    this.linkElements.forEach((link) => {
      link.addEventListener('click', this.handleClick)
    })
  }
}

const scroll = new SmoothScroll("a[href^='#']")
const btnHome = document.querySelector('.homebutton')
btnHome.style.display = 'none'

function goToHome() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btnHome.style.display = 'flex'
  } else {
    btnHome.style.display = 'none'
  }
}
