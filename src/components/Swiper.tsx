// ProjectSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/projects.css";
import { EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import CardProject from './CardProject';

type Skills = {
  id: number;
  nom: string;
  logo: string;
};

type Project = {
  id: number;
  titre: string;
  description: string;
  image: string;
  url: string;
  skills: Skills[];
};
type SliderProps = {
  projects: Project[];
};
export default function Slider({projects}: SliderProps) {
   const slidesPerView = projects.length >= 3 ? 3 : projects.length;
  return (
<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={slidesPerView}
  loop={projects.length > slidesPerView}
  navigation={true}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  }}
  modules={[EffectCoverflow, Navigation]}
  className="projectSwiper"
>
  {projects.map((project) => (
        <SwiperSlide className="slide" key={project.id}>
          <CardProject {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}