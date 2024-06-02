document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', 
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  
      // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
      autoplay: {
        delay: 5000,
      },
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header-main');
    var lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
});




$(document).ready(function () {
  var video = document.getElementById('george');
  var playBtn = $('.play-icon');
  var pauseBtn = $('.pause-icon');
  var overlay = $('.overlay');
  // var text = $('.text');

  overlay.click(function () {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });

  $(video).on('play', function () {
      playBtn.css('display', 'none');
      pauseBtn.css('display', 'block');
      overlay.css('opacity', '1');
      // text.css('opacity', '0').css('display', 'none'); // Hide text permanently
  });

  $(video).on('pause', function () {
      playBtn.css('display', 'block');
      pauseBtn.css('display', 'none');
      overlay.css('opacity', '1');
      // Do not show text again on pause
  });
});