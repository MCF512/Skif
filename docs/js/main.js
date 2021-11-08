$(function () {

});

$('.header__burger').on('click', function () {
  $('.header__nav').toggleClass('header__nav--active');
  $('body').toggleClass('body--fixed');
});

$('.header__link').on('click', function () {
  $('.header__nav').removeClass('header__nav--active');
  $('body').removeClass('body--fixed');
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


