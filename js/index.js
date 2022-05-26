

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

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     focusOnSelect: true
//   });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
$(document).ready(function() {
      $("#contactus").validate({
      rules: {
        Name: "required",
        Mobile:{
           required: true,
           number: true,
           minlength: 9,
           maxlength: 12
         },
        email: {
          required: true,
          email: true
        },
        Message:{
           required: true,
           minlength: 30,
           maxlength: 300
         },
        agree: "required"
      },
      messages: {
        Name: "Please enter Name",
        agree: "Please accept our policy",
        email:{
           required: "Please enter a valid email address",
           email: "Please enter a valid email address"
        },
         Mobile:{
           number: "Please enter a valid Mobile No.",
           minlength: "Mobile No. should be greater than 8 digit",
           maxlength : "Mobile No. should be less than 12 digit"
        },
        Message:{
           minlength: "Message should be greater than 30 character long",
           maxlength: "Message should be less than 300 character long"
         }
      },
      submitHandler: function (form) {
             $('p#message').show();
             $.ajax({
                 type: "POST",
                 url: "contactus.php",
                 data: $(form).serialize(),
                 success: function () {
                     $('p#message').html("<span class='thankyou'>Thank you for contact us.</span>");
                     setTimeout(function(){$('p#message').hide();}, 5000);
                 }
             });
             return false; // required to block normal submit since you used ajax
         }
     });
  });