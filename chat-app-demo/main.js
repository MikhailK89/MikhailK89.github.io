$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    dotsClass: 'dots-style',
    prevArrow: '<div class="prev"><span class="material-icons">arrow_back</span></div>',
    nextArrow: '<div class="next"><span class="material-icons">arrow_forward</span></div>'
  })

  const clickHandler = () => {
    setTimeout(() => {
      const photoName = $('.slick-current').find('img').attr('alt')
      $('.photo-name').text(photoName)
    }, 0)
  }

  $('.slick-arrow').find('span').click(clickHandler)
  $('.dots-style').find('button').click(clickHandler)

  clickHandler()
})
