import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image  from 'next/image'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

interface BannerProps {
  banners: [
    url: string | any,
    alt: string | any
  ]
}

export function BannerTop({banners}: BannerProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{delay: 2500}}
      navigation={true}
      pagination={true}
      slidesPerView={1}
      className={styles.bannerTop}
    >
      {banners.map((banner, index) => {
      return <SwiperSlide key={index} className={styles.bannerTop__item}>
        <Image src={banner.url} alt={banner.alt} width={1920} height={792}/>
      </SwiperSlide>
      })}
    </Swiper>
  );
}
