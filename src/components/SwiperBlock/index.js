import React, {useEffect, useRef, useState} from 'react';
import classNames from "classnames";
import ReactPlayer from 'react-player/lazy';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useInView} from "react-intersection-observer";

import video_1 from './../../assets/video/video_1.mp4'
import video_2 from '../../assets/video/video_3.mp4'
import video_3 from '../../assets/video/video_2.mp4'
import first_video_left from './../../assets/img/first_video_left.png';
import first_video_mobile from '../../assets/img/first_video_mobile_left.png';
import first_video_right from './../../assets/img/first_video_right.png';
import first_video_right_mobile from './../../assets/img/first_video_right_mobile.png';
import second_video_left from './../../assets/img/second_video_left.png';
import second_video_left_mobile from './../../assets/img/second_video_left_mobile.png';
import second_video_right from './../../assets/img/second_video_right.png';
import second_video_right_mobile from './../../assets/img/second_video_right_mobile.png';
import third_video_left from './../../assets/img/third_video_left.png';
import third_video_left_mobile from './../../assets/img/third_video_left_mobile.png';
import third_video_right from './../../assets/img/third_video_right.png';
import third_video_right_mobile from './../../assets/img/third_video_right_mobile.png';

import s from './SwiperBlock.module.scss';
import 'swiper/css';
import SlideNextButton from "../SliderNextButton";
import SliderPrevButton from "../SliderPrevButton";
import GoBtn from "../GoBtn";

const SwiperBlock = ({clickToSecretButton}) => {
    const [isHover, setIsHover] = useState(true);
    const [isClick, setIsClick] = useState(false);
    const refVideoFirst = useRef(null);
    const refVideoSecond = useRef(null);
    const refVideoThird = useRef(null);
    const {ref, inView} = useInView({
        threshold: 0.1,
    });

    const [count, setCount] = useState(0);
    const [isBtnPressed, setIsBtnPressed] = useState(false);

    useEffect(() => {
        refVideoFirst?.current.seekTo(0)
        refVideoSecond?.current.seekTo(0)
        refVideoThird?.current.seekTo(0)
    }, [count])

    return (
        <div className={s.swiper_block}>
            <div className={s.overlay} ref={ref} onClick={() => setIsClick(true)}>
                <Swiper
                    className={s.swiper}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={(a) => setCount(a.realIndex)}
                >
                    <SwiperSlide>
                        <ReactPlayer
                            loop={true}
                            ref={refVideoFirst}
                            volume={Number(isClick)}
                            playing={count === 0 && inView && isBtnPressed}
                            width='100%'
                            height='100%'
                            className={s.video}
                            controls={false}
                            url={video_1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReactPlayer
                            ref={refVideoSecond}
                            loop={true}
                            playing={count === 1 && inView && isBtnPressed}
                            width='100%' height='100%' className={s.video} controls={false} url={video_3}/>
                    </SwiperSlide>
                    <SwiperSlide> <ReactPlayer
                        loop={true}
                        ref={refVideoThird}
                        playing={count === 2 && inView && isBtnPressed}
                        width='100%' height='100%' className={s.video} controls={false} url={video_2}/></SwiperSlide>

                    <div className={s.btn_wrapper}>
                        <SliderPrevButton setIsBtnPressed={setIsBtnPressed}/>
                        <GoBtn isBtnPressed={isBtnPressed} setIsBtnPressed={setIsBtnPressed} />
{/*
                        <img onClick={() => setIsBtnPressed(true)} className={s.go_btn} src={go_btn} alt="go"/>
*/}
                        <SlideNextButton setIsBtnPressed={setIsBtnPressed}/>
                    </div>


                </Swiper>
            </div>
            {count === 0 && <>
                <img className={classNames(s.first_video_left, s.left_animation)} src={first_video_left} alt="fruits"/>
                <img className={classNames(s.first_video_mobile_left, s.left_animation)} src={first_video_mobile} alt="fruits"/>
                <img className={classNames(s.first_video_right, s.right_animation)} src={first_video_right} alt="fruits"/>
                <img className={classNames(s.first_video_right_mobile, s.right_animation)} src={first_video_right_mobile} alt="fruits"/>
            </>}
            {count === 1 && <>
                <img className={classNames(s.second_video_left, s.left_animation)} src={second_video_left} alt="fruits"/>
                <img className={classNames(s.second_video_left_mobile, s.left_animation)} src={second_video_left_mobile} alt="fruits"/>
                <img className={classNames(s.second_video_right, s.right_animation)} src={second_video_right} alt="fruits"/>
                <img className={classNames(s.second_video_right_mobile, s.right_animation)} src={second_video_right_mobile} alt="fruits"/>
            </>}
            {count === 2 && <>
                <img className={classNames(s.third_video_left, s.left_animation)} src={third_video_left} alt="fruits"/>
                <img className={classNames(s.third_video_left_mobile, s.left_animation)} src={third_video_left_mobile} alt="fruits"/>
                <img className={classNames(s.third_video_right, s.right_animation)} src={third_video_right} alt="fruits"/>
                <img className={classNames(s.third_video_right_mobile, s.right_animation)} src={third_video_right_mobile} alt="fruits"/>
            </>}
            {/*<img className={classNames(s.pears, {
                [s.animatin_common]: count === 0
            })} src={pears} alt="груши"/>
            <img className={classNames(s.pears_mobile, {
                [s.animatin_common]: count === 0
            })} src={pears_mobile} alt="груши"/>
            <img className={classNames(s.crazy, {
                [s.animatin_common]: count === 0
            })} src={crazy} alt="крези смотрит на кнопку"/>
            {(count === 0) && <>
                <img
                    className={classNames(s.lazy_show)}
                    src={lazy_show_table}
                    alt="лейзи показывает таблицу crazy-lazy energy"
                />
                <img
                    className={classNames(s.crazy_union, {
                        [s.union_show]: isHover,
                        [s.union_scale]: count === 0,
                    })}
                    src={crazy_show_union}
                    alt="Пробуй максимум понемножку!
            Мир большой, как тут все успеть! Но у тебя точно получится. Или не точно. "
                />
            </>}
            {count === 1 && <>
                <img
                    className={classNames(s.crazy_2, {
                        [s.animation_start]: count === 1,
                    })}
                    src={swiper_people_2}
                    alt="Быть одному можно только вместе! Всегда держи рядом друга! Вместе кринж не такой кринжовый,
                 а движ еще более движовый."
                />
                <img className={classNames(s.crazy_union_mobile, {
                    [s.union_show]: isHover,
                    [s.union_scale]: count === 1,
                })} src={crazy_union_2_mobile} alt="Быть одному можно только вместе! Всегда держи рядом друга! Вместе кринж не такой кринжовый,
                 а движ еще более движовый."/>
                <img
                    className={classNames(s.crazy_2_union, {
                        [s.union_show]: isHover,
                        [s.union_scale]: count === 1,
                    })}
                    src={crazy_union_2}
                    alt="Быть одному можно только вместе! Всегда держи рядом друга! Вместе кринж не такой кринжовый,
                 а движ еще более движовый."
                />
            </>}
            {count === 2 && <>
                <img
                    className={classNames(s.crazy_3, {
                        [s.animation_start]: count === 2
                    })}
                    src={crazy_3}
                    alt="крейзи жанглируешь грушами"
                />
                <img className={classNames(s.crazy_union_mobile, {
                    [s.union_show]: isHover,
                    [s.union_scale]: count === 2,
                })} src={crazy_union_3_mobile} alt="Скучно веселись или весело скучай! Кто сказал, что всегда нужно быть на
                 подъеме. Иногда ты Lazy, а иногда Crazy."/>
                <img className={classNames(s.crazy_2_union, {
                    [s.union_show]: isHover,
                    [s.union_scale]: count === 2,
                })} src={crazy_3_union}
                     alt="Скучно веселись или весело скучай! Кто сказал, что всегда нужно быть на
                 подъеме. Иногда ты Lazy, а иногда Crazy."
                />
            </>}
            {count === 3 && <>
                <img
                    className={classNames(s.crazy_4, {
                        [s.animation_start]: count === 3
                    })}
                    src={crazy_4}
                    alt="Крейзи и лейзи кушают"
                />
                <img className={classNames(s.crazy_union_mobile, {
                    [s.union_show]: isHover,
                    [s.union_scale]: count === 3,
                })} src={crazy_union_4_mobile} alt="Не слушай эти советы, если не хочешь! А делай как хочешь."/>
                <img
                    className={classNames(s.crazy_2_union, {
                        [s.union_show]: isHover,
                        [s.union_scale]: count === 3,
                    })}
                    src={crazy_4_union}
                    alt="Не слушай эти советы, если не хочешь! А делай как хочешь."
                />
            </>}
            <div className={s.video_block}/>
            <div className={s.points}>{[0, 1, 2].map((el, index) =>
                <div className={classNames(s.point, {
                    [s.active_point]: index === count
                })} key={index}/>)
            }
            </div>
            {count === 0 && false && <button onClick={clickToSecretButton} className={s.button_while}>
                <img src={button_white} alt="а сюда не жмиииии"/>
                <div className={s.text}> а сюда<br/> не жмиииии</div>
            </button>}*/}
        </div>
    )

}

export default SwiperBlock;