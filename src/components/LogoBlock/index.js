import React from 'react';

import s from './LogoBlock.module.scss';
import backgroundBlack from './../../assets/img/background_logo_black.png';
import logo from './../../assets/img/logo.png';
import logo_pc from './../../assets/img/logo_pc.png';
import logo_subword from './../../assets/img/logo_subword.png';
import smile from './../../assets/img/smile.png';
import fruits_text from './../../assets/img/fruits_text.png';
import smile_two from './../../assets/img/smile_two.png';
import energy from './../../assets/img/energy.png';
import coffe from './../../assets/img/coffe.png';
import vitamin_b from './../../assets/img/vitamin_b.png';
import taurin from './../../assets/img/taurin.png';

const LogoBlock = ({scrollToLich}) => {
    return (
        <>
            <div className={s.wrapper_logo}>
                <img className={s.background_black} src={backgroundBlack} alt="logo"/>
                <img className={s.logo_pc} src={logo_pc} alt="logo"/>
                <img className={s.logo} src={logo} alt="crazy lazy energy"/>
                <img className={s.logo_subword} src={logo_subword} alt="Ты совсем crazy lazy?"/>
            </div>
            <div className={s.wrapper_pink}>
                <img className={s.coffe} src={coffe} alt="кофеин"/>
                <img className={s.energy} src={energy} alt="energy"/>
                <img className={s.vitamin_b} src={vitamin_b} alt="Витамин B"/>
                <img className={s.taurin} src={taurin} alt="Таурин"/>


                <div className={s.text}>
                    <div>
                        Новый <b>напиток</b>, который ты точно оценишь. Для настроения тут самые <b>Crazy
                        цвета и вкусы! </b>
                        <img className={s.smile} src={smile} alt="мордочка"/>
                    </div>
                    <div className={s.text_description}>
                        <span>Содержит таурин, кофеин и витамины, доступен всем-всем.
                            <img className={s.fruits_text} src={fruits_text} alt="fruit"/></span>

                        <span className={s.empty_span}/>

                        <span>Еще не успел попробовать?</span>
                        <span className={s.last_string}>
                                <span className={s.empty_span}/>
                                <img className={s.smile_two} src={smile_two} alt="мордочка"/>
                                Ты совсем  <b>  Crazy Lazy</b>? 
                                <button onClick={scrollToLich} className={s.btn}>→ Зацени эти вкусы!</button>
                            </span>
                    </div>

                </div>

                <div className={s.text_mobile}>
                    <div>
                        Новый <b>напиток</b>, который <img className={s.smile} src={smile} alt="мордочка"/> ты
                        точно оценишь. Для настроения тут самые <b>Crazy
                        цвета и вкусы! </b>

                    </div>
                    <div className={s.text_description}>
                        <span>Содержит таурин, кофеин и витамины, доступен всем-всем. 
                            <img className={s.fruits_text} src={fruits_text} alt="fruit"/> 
                        </span>
                        <span>Еще не успел попробовать?</span><br/>
                        <div className={s.last_string}>
                            <img className={s.smile_two} src={smile_two} alt="мордочка"/> 
                            Ты совсем <b> Crazy Lazy</b>? → <br/>
                            Зацени эти вкусы!
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LogoBlock;