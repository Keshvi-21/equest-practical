// Menu Js //
        $(document).ready(function(){
            $(".menu_open").click(function(){
              $(".navigation").slideToggle("slow");
              $(".menu_icon").toggleClass('close');
              $(".nav-overlay").toggle();
            });
          });
// Menu Js //  

// Select picker //

$(function(){
    $('.selectpicker').selectpicker();
});

// Select picker //

$(document).ready(function(){
    $(".find").click(function(){
        $(".text_find").toggle();
        $(".find").toggleClass('cross');
        $("input[type='text']").focus();
    })
})

$(document).ready(function(){
  
    $(".icon").click(function(){
      $(".wrap, .input").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });

// Owl demo Slider //   
    $('#owl-demo').owlCarousel({
        loop:true,
        margin:60,
        responsiveClass:true,
        nav:true,
        dots:false,
       
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:4,
                nav:true
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });
// Owl demo Slider //   

// Shop info slider //
    $('#shop-info').owlCarousel({
        loop:true,
        margin:44,
        stagePadding:90,
        responsiveClass:true,
        nav:false,
        dots:false,
        
        responsive:{
            0:{
                items:1,
                margin:10,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                margin:20,
            },
            1199:{
                items:3.5,
                nav:false,
                loop:false,
                stagePadding:90
            }

        }
    });
// Shop info slider //

// Reviews section Slider //
    $('#reviews-section').owlCarousel({
        loop:true,
        margin:44,
        responsiveClass:true,
        nav:true,
        dots:false,
        navText:['<img src="assets/images/left-arrow.svg">','<img src="assets/images/right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:1,
                nav:true,
                margin:20
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
// Reviews section Slider //   

