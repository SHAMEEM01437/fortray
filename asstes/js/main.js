// banner slider
var swiper = new Swiper(".fortray_banner", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next_",
      prevEl: ".swiper-button-prev_",
    },
  });

  // client
  $('.client_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// client two
$('.client_carousel-2').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:7
      }
  }
})


// career carousel 

$('.career_carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// Rating carousel 

$('.rating_carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2,
          margin:50
      }
  }
})

// tabs =====

$(document).ready(function(){
  $('.tabs_list_items').click(function(){
    $('.tabs_list_items').removeClass('animated_cla');
    $(this).addClass('animated_cla');
    let tabContaner = $(this).index();
    $('.tab_section_container').removeClass('animatedContainer_cla');
    $('.tab_section_container').eq(tabContaner).addClass('animatedContainer_cla');
  })
})

// autoplay tabs animation code
function startAnimation() {
  var frames = document.getElementsByClassName("tabs_list_items");
  var tabs_container = document.getElementsByClassName("tab_section_container");
  var frameCount = frames.length;
  var tabs_containerCount = tabs_container.length;
  var i = 0;
  var c = 0;
  setInterval(function () {
      frames[i % frameCount].classList.remove('animated_cla');
      frames[++i % frameCount].classList.add('animated_cla');
      tabs_container[c % tabs_containerCount].classList.remove('animatedContainer_cla');
      tabs_container[++c % tabs_containerCount].classList.add('animatedContainer_cla');
      
  }, 3000);
}
// Security tab script here 


$(document).ready(function(){
  $('.security_tab_item').mouseover(function(){
    $('.security_tab_item').removeClass('active_tab');
    $(this).addClass('active_tab');
    let securityTabContainer =  $(this).index();
    $('.security_tab_content').removeClass('container_active');
    $('.security_tab_content').eq(securityTabContainer).addClass('container_active');
  })
})
//  digital tab item 
$(document).ready(function(){
  $('.digital_tab_item').mouseover(function(){
    $('.digital_tab_item').removeClass('active_tab');
    $(this).addClass('active_tab');
    let digitalTabContainer =  $(this).index();
    $('.digital_tab_content').removeClass('container_active');
    $('.digital_tab_content').eq(digitalTabContainer).addClass('container_active');
  })
})

// section animation start add class 
window.addEventListener('scroll', () =>{
  let section = document.getElementById('about-four-man');
  let pageScroll = pageYOffset;
  let pageTop = section.offsetTop;
  if(pageScroll >= pageTop - (window.innerHeight - 100)){
      section.classList.add('start');
  }else{
      section.classList.remove('start')
  }
})

// autoplay tabs animation code for get product
function getanimationPro() {
  var get_roduct = document.getElementsByClassName("get_product_list");
  var gettabs_container = document.getElementsByClassName("get_products_container");
  var frameCount = get_roduct.length;
  var gettabs_containerCount = gettabs_container.length;
  var g = 0;
  var p = 0;
  setInterval(function () {
      get_roduct[g % frameCount].classList.remove('active');
      get_roduct[++g % frameCount].classList.add('active');
      gettabs_container[p % gettabs_containerCount].classList.remove('active');
      gettabs_container[++p % gettabs_containerCount].classList.add('active')
  }, 3000);
}
startAnimation();
getanimationPro();


// Digital marketing slider 
$('.digital_marketing_carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


// section nav tab 
$(document).ready(function(){
  $('.nav-item').click(function(){
    $('.sectin_nav_item').removeClass('active')
    $(this).children('a').addClass('active')
  })
})
// scroll section change tab 
const sections = document.querySelectorAll(".section_tab[id]");
window.addEventListener('scroll', navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
        sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if(
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
            ){
    document.querySelector(".fortray_tabs_nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
    document.querySelector(".fortray_tabs_nav a[href*=" + sectionId + "]").classList.remove("active");
    }
});
}