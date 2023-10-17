import logo from './logo.svg';
import video from './assets/video/video_1.mp4'
import s from './App.module.scss';
import LogoBlock from "./components/LogoBlock";
import LichiBlock from "./components/LichiBlock";
import OrangeBlock from "./components/OrangeBlock";
import YellowBlock from "./components/YellowBlock";
import Footer from "./components/Footer";
import SwiperBlock from "./components/SwiperBlock";
import MobileBlock from "./components/MobileBlock";
import React, { useRef, useState } from "react";
import { FAQBlock } from './components/FAQBlock';


function App() {
    const refBlockLich = useRef(null);
    const refMobileBlock = useRef(null);
    const [isMobileBlockShow, setIsMobileBlockShow] = useState(false)

    const scrollToLich = () => {
        refBlockLich?.current?.scrollIntoView({ behavior: "smooth" })
    }

    const clickToSecretButton = () => {
        setIsMobileBlockShow(true)
        setTimeout(() => {
            refMobileBlock?.current?.scrollIntoView({ behavior: "smooth" })
        }, 300)
    }

    return (
        <>
            <LogoBlock scrollToLich={scrollToLich} />
            <div className={s.black_line} />
            <LichiBlock refLich={refBlockLich} />
            <OrangeBlock />
            <YellowBlock />
            <div className={s.black_line_subvideo} />
            <SwiperBlock clickToSecretButton={clickToSecretButton} />
            <div className={[s.black_line_submobile, s.displayNone]} />

            {/*
            <MobileBlock refMobileBlock={refMobileBlock} isMobileBlockShow={isMobileBlockShow}/>
*/}
            <FAQBlock />
            <Footer />

        </>
    );
}

export default App;
