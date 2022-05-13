

// $(document).ready(function(){ 
//     $(window).scroll(function(){ 
//         if ($(this).scrollTop() > 100) { 
//             $('#scroll').fadeIn(); 
//         } else { 
//             $('#scroll').fadeOut(); 
//         } 
//     }); 
//     $('#scroll').click(function(){ 
//         $("html, body").animate({ scrollTop: 0 }, 600); 
//         return false; 
//     }); 
// });


// slider js

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });