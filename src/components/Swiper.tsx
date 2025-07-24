// ProjectSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/projects.css";
import projetimage from "../assets/pictures/screenshot-KidsCode.png"
import { EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
export default function Slider() {
  return (
  <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      navigation={true}
      coverflowEffect={{
        rotate: 50,     
        stretch: 0,
        depth: 300,      
        modifier: 1,
        slideShadows: true
      }}
        breakpoints={{
    0: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 3, 
    }
  }}

      modules={[EffectCoverflow, Navigation]}
      className="projectSwiper"
    >
      <SwiperSlide className='slide'><img src={projetimage} alt="projet 1" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={projetimage} alt="projet 2" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={projetimage} alt="projet 3" /></SwiperSlide>
      <SwiperSlide className='slide'><img src={projetimage} alt="projet 4" /></SwiperSlide>
    </Swiper>
  );
}