import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper styles

// Optional modules you may need (like pagination, navigation)
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import './css/custom-swiper.css'; // Ensure this file exists and is loaded
import VideoPlayer from './VideoPlayer';

const SliderComponent = () => {
  return (
    <Swiper
      spaceBetween={10} // Add some space between slides
      slidesPerView={1} // Default to 1 slide per view for small screens
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {/* Slide for Video */}
      <SwiperSlide className="flex justify-center items-center overflow-hidden rounded-lg">
        <VideoPlayer src="/assets/11.mov" width={262} height={314}/>
      </SwiperSlide>

      {/* Slide for Image */}
      <SwiperSlide className="flex justify-center items-center ">
        <div className="relative w-full h-full">
          <Image src="/assets/two.svg" alt="Slide 2" width={262} height={314} className='w-full'/>
        </div>
      </SwiperSlide>

      {/* Slide for Video */}
      <SwiperSlide className="flex justify-center items-center overflow-hidden rounded-lg">
        <VideoPlayer src="/assets/33.mp4" width={262} height={314}/>
      </SwiperSlide>

      {/* Slide for Image */}
      <SwiperSlide className="flex justify-center items-center ">
        <div className="relative w-full h-full">
          <Image src="/assets/four.svg" alt="Slide 1" width={262} height={314} className='w-full'/>
        </div>
      </SwiperSlide>

      {/* Slide for Video */}
      <SwiperSlide className="flex justify-center items-center overflow-hidden  rounded-lg">
        <VideoPlayer src="/assets/55.mp4" width={262} height={314}/>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center ">
        <div className="relative w-full h-full">
          <Image src="/assets/four.svg" alt="Slide 1" width={262} height={314} className='w-full'/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
