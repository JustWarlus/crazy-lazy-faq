import React from 'react';

import video_1 from './../../assets/video/video_1.mp4'
import video_2 from '../../assets/video/video_3.mp4'
import video_3 from '../../assets/video/video_2.mp4'
import crazy_mobile_block from './../../assets/img/crazy_mobile_block.png';
import union_mobile_block from './../../assets/img/union_mobile_block.png';
import mobile_block_right from './../../assets/img/mobile_block_right.png';
import mobile_block_left from './../../assets/img/mobile_block_left.png';
import mobile_mobile from './../../assets/img/mobile_mobile.png';
import fruit_mobile_left from './../../assets/img/fruit_mobile_left.png';
import mobile from './../../assets/img/mobile.png';
import fruit_mobile_left_for_mobile from './../../assets/img/fruit_mobile_left_for_mobile.png';
import s from './MobileBlock.module.scss';
import classNames from "classnames";
import {useInView} from "react-intersection-observer";
import {Swiper, SwiperSlide} from "swiper/react";
import ReactPlayer from "react-player";
import SlideNextButton from "../SliderNextButton";

const MobileBlock = ({isMobileBlockShow, refMobileBlock}) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
    });
    return (
        <div ref={refMobileBlock} className={classNames(s.block, {
                [s.show_block]: isMobileBlockShow
            }
        )}>
            <div className={s.wrapper_swiper}>
                <Swiper
                    className={s.swiper}
                    spaceBetween={0}
                    Scrollbar={true}
                    slidesPerView={1}
                    loop={true}
                    //onSlideChange={(a) => setCount(a.realIndex)}
                >
                    <SwiperSlide>
                        <ReactPlayer
                            volume={0}
                            playing={true}
                            loop={true}
                            width='100%' height='100%' className={s.video} controls={true} url={video_1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReactPlayer
                            loop={true}
                            width='100%' height='100%' className={s.video} controls={false} url={video_2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReactPlayer
                            loop={true}
                            width='100%' height='100%' className={s.video} controls={false}
                            url={video_3}/></SwiperSlide>
                </Swiper>
            </div>
            <img className={s.mobile_block_right} src={mobile_block_right} alt="элементы"/>
            <img className={s.mobile_block_left} src={mobile_block_left} alt="элементы"/>
            <img className={s.mobile} src={mobile_mobile} alt="рамка"/>
            <div className={s.video_placeholder}/>
            <img className={s.mobile_for_mobile} src={mobile} alt="мобильник"/>
            <img className={s.fruilt_mobile_left_for_mobile} src={fruit_mobile_left_for_mobile} alt="фрукты"/>
            <img className={s.fruit_mobile_left} src={fruit_mobile_left} alt="мобильник"/>
            <img ref={ref} className={classNames(s.union, {[s.union_show]: inView})} src={union_mobile_block}
                 alt="мысли крейзи"/>
            <img className={s.crazy} src={crazy_mobile_block} alt="крейзи"/>
        </div>
    )
}

export default MobileBlock;