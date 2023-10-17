import React, {useState} from 'react';
import classNames from "classnames";

import orange_wave from './../../assets/img/orange_wave.png';
import yellow_bottle from './../../assets/img/yellow_bottle.png';
import energy_orange from './../../assets/img/energy_orange.png';
import cirkle from './../../assets/img/cirkle.png';
import yellow_spray from './../../assets/img/yellow_spray.png';
import crazy_kent from './../../assets/img/crazy_kent.png';
import linchi_pineapple from './../../assets/img/linchi_pineapple.png';
import vitamin_b from './../../assets/img/vitamin_b_green.png';
import union_yellow from './../../assets/img/union_yellow.png';
import orange from './../../assets/img/orange_spray_left.png'
import orange_wave_mobile from './../../assets/img/orange_wave_mobile.png'
import union_orange_mobile from './../../assets/img/union_orange_mobile.png'

import s from './OrangeBlock.module.scss';
import {useInView} from "react-intersection-observer";

const OrangeBlock = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        //triggerOnce: true,
    });
    const { ref: refMobile, inView: inViewMobile } = useInView({
        threshold: 0.2,
        //triggerOnce: true,
    });
    return (
        <div className={s.wrapper}>
            <img className={s.orange_wave} src={orange_wave} alt="orange wave"/>
            <img className={s.orange_wave_mobile} src={orange_wave_mobile} alt="orange wave"/>
            <img className={s.yellow_bottle} src={yellow_bottle} alt="личи ананас бутылка"/>
            <img className={s.energy} src={energy_orange} alt="enegry"/>
            <img className={s.pineapple_linchi} src={linchi_pineapple} alt="личи ананас"/>
            <img src={vitamin_b} className={s.vitamin_b} alt="витамин B"/>
            <img className={s.berry} src={cirkle} alt="ягода"/>
            <img className={s.yellow_spray} src={yellow_spray} alt="желтая брызга"/>
            <img className={s.orange_spray} src={orange} alt="оранжевая брызга"/>
            <img ref={ref} className={classNames(s.union, {
                [s.union_show]: inView,
            })} src={union_yellow}
                 alt="личи смиотрит на бутылку"/>
            <img
                className={classNames(s.crazy_linch, {
                [s.linch_show]: inView,
                [s.linch_animation]: inView,
            })} src={crazy_kent}
                 alt="crazy линч"/>

            <img ref={refMobile}  className={classNames(s.union_orange_mobile, {
                [s.union_orange_mobile_show]: inViewMobile,
            })} src={union_orange_mobile} alt="crazy линч"/>

        </div>
    )
}

export default OrangeBlock;