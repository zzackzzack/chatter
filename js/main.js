$('.interactive-menu-button a').click(function() {
  $(this).toggleClass('active');
});

var scroll = new SmoothScroll('a[href*="#"]');


$('.more-btn').click(function() {
  $('#hiden-gallery').toggleClass('hide');
  $('#hiden-gallery').toggleClass('open');
  if ( $('#hiden-gallery').is( ".open" ) ) {
    $(".more-btn-inside").text("Show Less.");
  }else {
    $(".more-btn-inside").text("Show More.");
  }
});


function slickify(){
  $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ] 
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
      slickify(); 
      $('#blog-btn').addClass('hide-me');  
  }else if($windowWidth < 991) {
    $('#blog-btn').removeClass('hide-me');
  }
});

$('#blog-btn').click(function() {
  $('.hiden-blog').toggleClass('hide-blog');
  $('.hiden-blog').toggleClass('open-blog');
  if ( $('.hiden-blog').is( ".open-blog" ) ) {
    $("#blog-btn").text("Show Less Stories.");
  }else {
    $("#blog-btn").text("Show More Stories.");
  }
});





$(document).ready(function() {
  // Get media - with autoplay disabled (audio or video)
  var media = $('video').not("[autoplay='autoplay']");
  var tolerancePixel = 40;

  function checkMedia(){
      // Get current browser top and bottom
      
      var scrollTop = $(window).scrollTop() + tolerancePixel;
      var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

      media.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;

          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
              $(this).get(0).play();
          } else {
              $(this).get(0).pause();
          }
      });
  }

  function playGIF(){
    var image = $('.aboutImg')

      var scrollTop = $(window).scrollTop() + tolerancePixel;
      var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

      image.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;

          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
            //view explaination in `In brief` section above
            setTimeout(function(){
              // image.classList.add('pause');
              this.value = 'play';
            },800)
          } else {
                  // image.classList.remove('pause');
                  this.value = 'pause';
          }
      });


  }

  function stickyShow(){
    var scrollTop = $(window).scrollTop() + tolerancePixel;
    var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
    if(scrollTop>500){
      $('.sticky').show()
    }else{
      $('.sticky').hide()
    }
  }

  // function cricleInc(){
  //   var scrollTop = $(window).scrollTop() + tolerancePixel;
  //   var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

  //       var yTopMedia = $('.circleMe').offset().top;
  //       var yBottomMedia = $(".circleMe").height() + yTopMedia;
  //       console.log(scrollTop)
  //       console.log(scrollBottom)

  //       if($(window).scrollTop() + $(window).height() > $(document).height()*0.95) {
  //         setTimeout(function(){
  //           $('.circleMe').stop().animate({
  //           zoom: 2,
  //       })
  //     },900);
  //     }else{
  //       $('.circleMe').stop().animate({
  //         zoom: 1,
  //     });
  //     }
  // }


  $(document).on('scroll', checkMedia);
  $(document).on('scroll', stickyShow);
  $(document).on('scroll', playGIF);

});