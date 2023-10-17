import React, {useState} from 'react'
import {useInView} from 'react-intersection-observer';

import linch_yellow_background from './../../assets/img/linch_yellow_background.png';
import pink_bottle from './../../assets/img/pink_bottle.png';
import watermelon_text from './../../assets/img/watermelon_text.png';
import lazy_pink from './../../assets/img/lazy_pink.png';
import union_pink from './../../assets/img/union_pink.png';
import union_pink_mobile from './../../assets/img/union_pink_mobile.png';
import vitamin_b_green from './../../assets/img/vitamin_b_green.png';

import s from './LichiBlock.module.scss';
import classNames from "classnames";

const LichiBlock = ({refLich}) => {

    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    return (
        <div className={s.wrapper} ref={refLich}>
            <img className={s.background} src={linch_yellow_background} alt="background"/>
            <img className={s.vitamin_b} src={vitamin_b_green} alt="витамин B"/>
            <img className={s.pink_bottle} src={pink_bottle} alt="бутылка crazy energy"/>
            <img
                className={s.watermelon_text} src={watermelon_text} alt="Арбуз кумкват конопля"/>
            <img
                ref={ref}
                className={classNames(s.lazyPeople, {
                    [s.lazy_people_animation]: inView,
                })} src={lazy_pink}
                alt="Лэйзи"
            />
            <img
                className={classNames(s.union_pink, {
                    [s.union_pink_show]: inView,
                    [s.union_animation]: inView,
                })}
                src={union_pink} alt="Когда придавило кринжом
        серого мира,
         просто нужен этот яркий дринк! Если ты до
          сих пор не знал, что такое кумкват, знакомься, это цитрус. Он не такой как все. Прям как ты."
            />

            <img className={classNames(s.union_pink_mobile, {
                [s.union_pink_mobile_show]: inView,
            })} src={union_pink_mobile} alt="Когда придавило кринжом
серого мира, просто нужен этот яркий дринк! Если ты до сих пор не знал, что такое кумкват, знакомься, это цитрус. Он не такой как все. Прям как ты."/>

        </div>
    )
}

export default LichiBlock