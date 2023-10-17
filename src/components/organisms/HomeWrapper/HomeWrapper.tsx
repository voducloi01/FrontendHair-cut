import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataSlideType } from '@/constants/constant';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './HomeWrapper.scss';

interface HomeWrapperProps {
  slideData: DataSlideType[];
}

const HomeWrapper = ({ slideData }: HomeWrapperProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slideData.map((e) => (
        <SwiperSlide key={e.id}>
          <img className="slide_img" src={e.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeWrapper;
