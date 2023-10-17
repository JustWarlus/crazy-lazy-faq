import React from 'react';

import s from './../SwiperBlock/SwiperBlock.module.scss';
import go_btn from './../../assets/img/go_btn.png';
import {useSwiper} from "swiper/react";

const GoBtn = ({isBtnPressed, setIsBtnPressed}) => {
    const swiper = useSwiper();

    const click = () => {
        if (!isBtnPressed) {
            setIsBtnPressed(true)
        } else {
            swiper.slideNext()
        }
    }

    return <div>
        <img onClick={click} className={s.go_btn} src={go_btn} alt="go"/>
    </div>
}

export default GoBtn;