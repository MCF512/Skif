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

$(".header__nav").on("click", "a", function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1000);
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


