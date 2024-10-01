
import Swiper from 'swiper';

// import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';
import { Navigation, Thumbs } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', function () {
  setEqualHeight();
  var header_lists = $(".header .lists_wrapper, .header .header__settings");
  $(".navigation").click(function () {
      hederCloseMenus();
      var item = $(this).find(".lists_wrapper");
      if (item.css("display") == "none") {
          item.slideDown();
      }
  });

  $(".header__settings_icon").click(function () {
      hederCloseMenus();
      var item = $(this).siblings(".header__settings");
      if (item.css("display") == "none") {
          item.slideDown();
      }
  });
  
  function hederCloseMenus()
  {
      header_lists.slideUp();
  }
  
  $(document).click(function(event) {
    if (!$(event.target).closest('.header').length) {
      hederCloseMenus();
    }
  });
  $(document).ready(function () {
      $("header").removeClass("header_fix");
      
      $("body").scroll(function () {
          if ($(this).scrollTop() > 20) {
              $("header").addClass("header_fix");
          } else {
              $("header").removeClass("header_fix");
          };
      });
  });
  // burger menu
  
var burger_menu = $(".burger_menu");
var burger_menu__bg = $(".burger_menu__bg");

$(".burger_menu_close").on("click", function (e) {
    burger_menu.removeClass("activ");
    burger_menu__bg.fadeOut(300);
});

$(".burger_menu_open").on("click", function (e) {
    burger_menu.addClass("activ");
    burger_menu__bg.fadeIn(300);
});

//

$(".burger_menu__navigations li > a").on("click", function (e) {
    var isActiv = $(this).hasClass("active");
    burgerMenuCloseNavigations();

    if(!isActiv)
    {
        $(this).addClass("active").closest("li").find(".navigation_list")
        .slideDown();
    }
});

var burger_menu_navigation_lists = $(".burger_menu .navigation_list");

function burgerMenuCloseNavigations()
{
    burger_menu_navigation_lists.slideUp().closest("li").find("> a").removeClass("active");
}

//

$(".burger_menu .setting_item_select").click(function (e) {
    var isActiv = $(this).hasClass("active");

    burgerMenuCloseSettingItems()

    if (!isActiv) {
        $(this)
            .addClass("active")
            .closest(".setting_items_wrapper")
            .find(".setting_items")
            .slideDown();
    }
});

var burger_menu_setting_items = $(".burger_menu .setting_items");

function burgerMenuCloseSettingItems()
{
    burger_menu_setting_items.slideUp().closest(".setting_items_wrapper").find(".setting_item_select").removeClass("active");
}

$(document).click(function(event) {
  if (!$(event.target).closest('.burger_menu__settings').length) {
    burgerMenuCloseSettingItems();
  }
});


// 
var swiperHero = new Swiper(".slides_hero", {
});
const navItem = document.querySelectorAll(".nav_item");

$(".menu-item").click(function (e) {
  e.preventDefault();
  let slideIndex = $(this).data("index");
  swiperHero.slideTo(slideIndex, 300, true);

  $(".menu-item").removeClass("active");
  $(this).addClass("active");
});
swiperHero.on("slideChange", function (e) {
  let navTarget = $(".menu-item[data-index=" + e.activeIndex + "]");
  $(".menu-item").removeClass("active");
  navTarget.addClass("active");
});

  var swiper2 = new Swiper(".slides_hero");
  var swipers = new Swiper(".swiperMobile", {
    breakpoints: {
      0:{
        slidesPerView: 1.05,
        spaceBetween: 10,

      },
      450: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      556: {
        slidesPerView: 1.5,
        spaceBetween: 10
      }
    }


  });
  var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: { slidesPerView: 2.2,direction: "horizontal", spaceBetween: 20, },
      350: { slidesPerView: 2.6,direction: "horizontal", spaceBetween: 20, },
      456: { slidesPerView: 3 , spaceBetween: 20, },
      556: { slidesPerView: 4 , spaceBetween: 20, },
      // 768: { slidesPerView: 4 ,spaceBetween: 20},
      880: { slidesPerView: 5 ,spaceBetween: 20},
      1100: {
         slidesPerView: 5,
         direction: "vertical",
         spaceBetween: 0,
         }

    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    // spaceBetween: 10,
    modules:[Navigation,Thumbs],

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // mossonry
 


});

window.onload = function() {
  
};

window.onresize = function() {
  setEqualHeight();
};

function setEqualHeight() {
  let commentItems = document.querySelectorAll('.comment_mobile .comment_item');
  let maxHeight = 0;

  commentItems.forEach(item => {
    item.style.height = 'auto';
  });

  commentItems.forEach(item => {
    let height = item.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  commentItems.forEach(item => {
    item.style.height = (maxHeight) + 'px';
  });
}