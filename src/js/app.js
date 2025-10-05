import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
	closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
  slidesPerView: 'auto',
  speed: 800,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: partnersSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: partnersSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 'auto',
    },
  },
});

// Инициализация слайдера stepsSlider
const stepsSlider = document.querySelector('.stepsSlider');
var mySwiperSteps = new Swiper(stepsSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: stepsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: stepsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },  
    1400: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера docSlider
document.querySelectorAll('.docSlider').forEach(n => {
  const mySwiperProductCard = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 18,
    speed: 600,
    autoplay: true,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера transportSlider
const transportSlider = document.querySelector('.transportSlider');
var mySwiperTransport = new Swiper(transportSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: stepsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: stepsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },  
    1400: {
      slidesPerView: 3,
    },
  },
});

function map() {
  const contactsMap = document.querySelector(".maps__map");
  if (contactsMap) {
    const center = JSON.parse(contactsMap.dataset.center);
    const zoom = Number(contactsMap.dataset.zoom);
    function init() {
      const htmlMap = new ymaps.Map(contactsMap, {
        center,
        zoom
      });
      const placemark = new ymaps.Placemark(center, {}, {
        iconLayout: "default#image",
        iconImageHref: "./img/icons/marker.svg",
        iconImageSize: [66, 66],
        iconImageOffset: [-35, -65]
      });
      htmlMap.controls.remove("geolocationControl");
      htmlMap.controls.remove("searchControl");
      htmlMap.controls.remove("trafficControl");
      htmlMap.controls.remove("typeSelector");
      htmlMap.controls.remove("fullscreenControl");
      htmlMap.controls.remove("zoomControl");
      htmlMap.controls.remove("rulerControl");
      htmlMap.behaviors.disable(["scrollZoom"]);
      htmlMap.geoObjects.add(placemark);
    }
    ymaps.ready(init);
  }
}


map();