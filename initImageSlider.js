// src/scripts/initImageSlider.js
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

/**
 * 初始化 Swiper 实例
 * @param {string} swiperId - Swiper 容器的 ID
 */
export function initializeSwiper(swiperId) {
  const swiperElement = document.getElementById(swiperId);
  if (swiperElement) {
    const swiperInstance = new Swiper(swiperElement, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      grabCursor: true,
      pagination: {
        el: `#${swiperId} .swiper-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: `#${swiperId} .swiper-button-next`,
        prevEl: `#${swiperId} .swiper-button-prev`,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    // 针对 Astro View Transitions 的清理逻辑
    const cleanupListener = () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
      document.removeEventListener('astro:before-swap', cleanupListener);
    };
    document.addEventListener('astro:before-swap', cleanupListener);
  }
}