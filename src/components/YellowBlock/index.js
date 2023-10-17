import React, {useState} from 'react';
import classNames from "classnames";

import bottle from './../../assets/img/orange_bottle.png';
import bottle_mobile from './../../assets/img/yellow_bottle_mobile.png';
import orange_spray_right from './../../assets/img/orange_spray_right.png';
import orange_spray_left from './../../assets/img/orange_spray_left.png';
import lazy_orange_people from './../../assets/img/lazy_orange_people.png';
import union_eat from './../../assets/img/union_eat.png';
import cofe_green from './../../assets/img/cofe_green.png';
import melon from './../../assets/img/melon.png';
import melon_half from './../../assets/img/melon_half.png';
import melon_and_chizecake from './../../assets/img/melon_and_chizecake.png';
import energy_and_melons from './../../assets/img/energy_and_melons.png';
import union_eat_mobile from './../../assets/img/union_eat_mobile.png';
import yellow_mobile_text from './../../assets/img/yellow_mobile_text.png';

import s from './YellowBlock.module.scss';
import {useInView} from "react-intersection-observer";

const YellowBlock = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const { ref: refMobile, inView:inViewMobile } = useInView({
        threshold: 0.2,
    });

    return <>
        <div className={s.wrapper}>
            <img className={s.bottle} src={bottle} alt="crazy lazy energy бутылка с дыней и чизкейком"/>
            <img ref={ref} className={classNames(s.union_eat, {
                [s.union_show]: inView,
                [s.union_animation]: inView,
            })} src={union_eat} alt="мысли лейзи"/>
            <img className={s.melon_text} src={melon_and_chizecake} alt="дыня и чизкейк"/>
            <img className={s.energy_and_melons} src={energy_and_melons} alt="energy and melons"/>
            <img className={s.bottle_mobile} src={bottle_mobile} alt="crazy lazy energy бутылка с дыней и чизкейком"/>
            <img className={s.spray_right} src={orange_spray_right} alt="брызга"/>
            <img ref={refMobile} className={classNames(s.union_eat_mobile, {
                [s.union_eat_mobile_show]: inViewMobile
            })} src={union_eat_mobile} alt="мысли"/>
            <img className={s.yellow_mobile_text} src={yellow_mobile_text} alt="дыня и чизкейк"/>

            {/*<img className={s.bottle_mobile} src={bottle_mobile} alt="crazy lazy energy бутылка с дыней и чизкейком"/>
            <img className={s.spray_left} src={orange_spray_left} alt="брызга"/>
            <img className={s.spray_right} src={orange_spray_right} alt="брызга"/>
            <img className={s.melon_half} src={melon_half} alt="дыня"/>
            <img className={s.melon_2} src={melon} alt="дыня"/>
            <img
                ref={ref}
                className={classNames(s.lazy_people, {
                    [s.lazy_show]: inView,
                    [s.lazy_animation]: inView,
                })}
                src={lazy_orange_people}
                alt="лейзи кушает"
            />
            <img className={s.melon_text} src={melon_and_chizecake} alt="дыня и чизкейк"/>
            <img className={classNames(s.union_eat, {
                [s.union_show]: inView,
                [s.union_animation]: inView,
            })} src={union_eat} alt="мысли лейзи"/>
            <img className={s.cofe} src={cofe_green} alt="кофеин"/>*/}



        </div>
    </>
}

export default YellowBlock;