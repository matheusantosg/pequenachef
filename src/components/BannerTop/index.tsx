import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

export function BannerTop() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{delay: 2500}}
      navigation={true}
      pagination={true}
      slidesPerView={1}
      className={styles.bannerTop}
    >
      <SwiperSlide className={styles.bannerTop__item}>
        <img src='/images/banner1.png' alt='Banner' />
      </SwiperSlide>
      <SwiperSlide className={styles.bannerTop__item}>
        <img src='/images/banner2.png' alt='Banner' />
      </SwiperSlide>
      <SwiperSlide className={styles.bannerTop__item}>
        <img src='/images/banner3.png' alt='Banner' />
      </SwiperSlide>
    </Swiper>
  );
}
