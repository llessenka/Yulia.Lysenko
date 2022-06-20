"use strict";

$(function () {
  $(".slick_slider").slick({
    //autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    fade: true
  });
  $("#articles_slick").slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  var articlesSlider = $("#articles_light").lightSlider({
    slideMargin: 40,
    loop: true,
    controls: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 2,
        slideMargin: 30
      }
    }, {
      breakpoint: 480,
      settings: {
        item: 1
      }
    }]
  });
  $("#articles_prev").on('click', function () {
    articlesSlider.goToPrevSlide();
  });
  $("#articles_next").on('click', function () {
    articlesSlider.goToNextSlide();
  });
  $("#articles_owl").owlCarousel({
    items: 3,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});