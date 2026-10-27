import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css";
import { paddingItems, heroSliderStyles } from "../../../db/styles";

const HeroSlider = () => {
  return (
    <div className="h-[90vh] md:h-[100vh]">
      <Swiper
        className="h-full mySwiper"
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}>
        <SwiperSlide className={`${heroSliderStyles.noy.noyBottleImage}`}>
          <div className={`${paddingItems}  h-full flex lg:items-center`}>
            <h1 className={`${heroSliderStyles.noy.noyText}`}>
              Water Where life begins
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${heroSliderStyles.bjni.bjniBottleImage}`}>
          <div className={`${paddingItems}  h-full flex lg:items-center`}>
            <div className={`${heroSliderStyles.bjni.bjniTextPositionControl}`}>
              <div className="text-white">
                <div>
                  <img className=" w-[88px] h-[40px] 3xl:w-[120px] 3xl:h-[54px] md:h-[48px] md:w-[120px] " src="https://www.noy.am/images/BJNI.svg" alt="" />
                </div>
                <div className={`${heroSliderStyles.bjni.bjniText}`}>
                  <h1>Sparkling Wather</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroSlider