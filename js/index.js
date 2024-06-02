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
        delay: 3500,
      },
      speed: 1500,
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






document.addEventListener("DOMContentLoaded", function() {
  // Function to animate the counting
  function animateCount(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          element.textContent = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  // Intersection Observer setup
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const timelineYearElement = entry.target.querySelector('.timelineYear');
              const endYear = parseInt(timelineYearElement.textContent);
              const startYear = endYear - 100;
              animateCount(timelineYearElement, startYear, endYear, 2000); // 2000ms duration for the count
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  // Observing each timeline year section
  document.querySelectorAll('.timeLineYearOuterLeft, .timeLineYearOuterRight').forEach(section => {
      observer.observe(section);
  });
});