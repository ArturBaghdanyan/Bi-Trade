import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import left from '../../../assets/section/trade-bonuses_icons/left-arrow.svg';
import right from  '../../../assets/section/trade-bonuses_icons/right-arrow.svg';

import style from './style.module.scss';

export const SwiperIcons = () => {
	let swiperRef = null;
  return (
		<div className={style.swiper_container}>
			<button 
			onClick={() => swiperRef.slidePrev()} 
			className={style.swiper_pagination}
			>
				<img src={left} alt="left" />
			</button>
    <Swiper
		onSwiper={(swiper) => (swiperRef = swiper)}
			freeMode
			autoHeight
      spaceBetween={50}
      pagination={{ clickable: true}}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 3.5,
          },
        }}
      className={style.swiper}
    >
			
			<div className={style.swiper_wrapper}>
				
				<SwiperSlide className={style.swiper_slide}></SwiperSlide>
				<SwiperSlide className={style.swiper_slide}></SwiperSlide>
				<SwiperSlide className={style.swiper_slide}></SwiperSlide>
				<SwiperSlide className={style.swiper_slide}></SwiperSlide>
				
			</div>
			
    </Swiper>
		<button onClick={() => swiperRef.slideNext()}
				className={style.swiper_pagination}>
					<img src={right} alt="right" />
				</button>
		</div>

  );
};