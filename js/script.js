let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

window.addEventListener("click", function(event) {
  let contact = document.querySelector('.contact');
  let body = document.querySelector('body');

  if(event.target.closest('.header-btn')) {
    contact.classList.toggle('contact-active');
    body.classList.toggle('open');
  }

  if(!event.target.closest('.decor') && (!event.target.closest('.header-btn')) && contact.closest('.contact-active')) {
    contact.classList.remove('contact-active');
    body.classList.remove('open');
  }
})


const swiperone = new Swiper('.our-sliders', {
  breakpoints: {
    320: {
      spaceBetween: 30,
      loop: true,
    },
    375: {
      spaceBetween: 80,
      loop: true,
    },
    425: {
      spaceBetween: 30,
      loop: true,
    },
    993: {
      allowTouchMove: false,
      loop: false,
    }
  }
});
const swiper = new Swiper('.gallery-sliders', {
    loop: true,
    spaceBetween: 40,
    speed: 800,
    // If we need pagination
    pagination: {
      el: '.gallery-box .swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery-box .swiper-button-next',
      prevEl: '.gallery-box .swiper-button-prev',
    },
  });

  const swipertwo = new Swiper('.clients-sliders', {
    loop: true,
    spaceBetween: 38,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.clients .swiper-pagination',
      clickable: true,
    },
  });

  const swiperthree = new Swiper('.articles-sliders', {
    loop: true,
    spaceBetween: 46,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.articles .swiper-pagination',
      clickable: true,
    },
  });


  window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    var BlkStyle = document.querySelector('header').style;
    if(html.scrollTop>50||body.scrollTop>50) {
        BlkStyle.background="#fff";
    } else BlkStyle.background="transparent";
     }