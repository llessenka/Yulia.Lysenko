$(function() {
  $("#main_slide-slick_slider").slick( {
    //autoplay: true,
    //autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false,
  });

  $("#product_list-slider").slick( {
    dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],
  });

    $("#partners_slide").slick( {
      dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],
  });
    
  $(".hamburger").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $("#side_block, #page_overlay").toggleClass("open");
    $("body").toggleClass("lock");
  })


});
    
