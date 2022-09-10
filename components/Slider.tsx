import React, { useRef, useState } from "react";
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import styles from '../styles/slider.module.scss'
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function App() {
  return (
    <Swiper
      loop={true}
      effect={"fade"}
      fadeEffect={{crossFade: true}}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={2000} 
      pagination={{clickable: true}}
      //navigation={true}
      modules={[EffectFade, Pagination, Navigation, Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={styles.slider_image}>
          <Image src="/top.jpg" alt="temari image" layout="fill" objectFit="cover" />
          <h2 className={styles.slider_image_message}>
            <p>住み慣れた我が家を一歩出て</p>
            <p>デイサービスセンターてまりで</p>
            <p>一日過ごされませんか</p>
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slider_image}>
          <Image src="/rehabili.jpg" alt="temari image" layout="fill" objectFit="cover" />
          <h2 className={`${styles.slider_image_message} ${styles.slider_image_message_2nd}`}>
            <p>リハビリも楽しく</p>
            <p>がんばれる</p>
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slider_image}>
          <Image src="/wheelchair.jpg" alt="temari image" layout="fill" objectFit="cover" />
          <h2 className={styles.slider_image_message}>
            3 Next Message
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
