$(function () {

});

$('.partners__slider').slick({
  dots: true,
  responsive: [{

    breakpoint: 769,
    settings: {
      unslick
    }
  }
  ]
});

$('.header__burger').on('click', function () {
  $('.header__nav').toggleClass('header__nav--active');
  $('body').toggleClass('body--fixed');
})
