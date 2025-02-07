$(document).ready(function () {
  // Smooth Scroll
  $('.nav-link').click(function (e) {
    e.preventDefault()
    let target = $(this).attr('href')
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    )
  })

  // Navbar Scroll Effect
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled')
    } else {
      $('.navbar').removeClass('scrolled')
    }
  })

  // Custom Navbar Toggle
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').slideToggle()
  })
})
