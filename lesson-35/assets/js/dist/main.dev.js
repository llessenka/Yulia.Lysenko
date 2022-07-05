"use strict";

$(function () {
  $('.rating').pieChart();
  $('.tab_list a').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.tab_list a.active, .tab_content.active').removeClass('active');
      $(this).addClass('active');
      $(".tab_content[data-id='" + $(this).attr("id") + "']").addClass('active');
    }
  });
  $(".star-rating").starRating({
    readOnly: true,
    initialRating: 4,
    starSize: 20,
    useGradient: false
  });
});