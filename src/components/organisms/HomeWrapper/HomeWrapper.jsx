import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { DATA_SLIDE } from '../../../constants/constant';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './TrangChu.scss';

const TrangChu = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      {DATA_SLIDE.map((e) => (
        <SwiperSlide key={e.id}>
          <img className="slide_img" src={e.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TrangChu;
