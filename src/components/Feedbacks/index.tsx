import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';
import { useWindowSize } from '../../Hooks/useMedia';

interface FeedbacksProps {
  feedbacks: [url: string | any, alt: string | any];
}

export function Feedbacks({feedbacks}: FeedbacksProps) {
  const { width } = useWindowSize()
  const isMobile = Number(width) <= 1024

  return (
    <section className={styles.feedbacks}>
      <div className={styles.feedbacks__wrapper}>
        <div className={styles.feedbacks__left}>
          {!isMobile ? 
          <Image
            className={styles.feedbacks__imageLeft}
            src='/images/banner-feedback.png'
            width={787}
            height={625}
            alt='Arte feedback'
          /> :
          <h2>Aqueles <b>feedbacks</b> <span>amamos</span></h2>
        }
        </div>
        <div className={styles.feedbacks__right}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{ delay: 2500 }}
            pagination={true}
            className={styles.feedback__slideContainer}
          >
            {feedbacks.map((image, index) => (
            <SwiperSlide key={index} className={styles.feedbacks__slideItem}>
              <Image src={image.url} alt={image.alt ? image.alt : 'Feedback'} width={190} height={365} />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
