import React, { useState } from "react";
import { FAQItem } from "../FAQItem";

import s from "./faq.module.scss";
import kumkvat from "./../../assets/img/kumkvat.png";
import faqbg from "./../../assets/img/faqbg.png";
import faq_right_mob from "./../../assets/img/faq_right_mob.png";
import { LINKS } from "../../constants";

const questions = [
  {
    question: "Это энергетик? Со скольки лет его можно купить?",
    ask: {
      __html:
        "Crazy Lazy – газировка с кофеином, таурином и необычными вкусами, которую могут купить все-все-все, без паспорта и ограничений 🔥",
    },
  },
  {
    question: "Могу ли я купить напиток, если мне нет 18?",
    ask: {
      __html: `Crazy Lazy — это напиток безалкогольный обогащенный газированный пастеризованный. А значит, что это просто напиток и он  
      <span class=${s.yellowSpan}>не является энергетическим.</span>
     Согласно закону, такой напиток продается без ограничений по возрасту.`,
    },
  },
  {
    question: "В каких магазинах купить Crazy Lazy?",
    ask: {
      __html:
        "Мы стараемся быть везде! Ты точно сможешь нас найти во всех крупных торговых сетях: Евроопт, Гиппо, Соседи, Санта, Корона и других! ",
    },
  },
  {
    question: "Когда новые вкусы?",
    ask: {
      __html: `Говорим максимально честно – мы стараемся! В поисках вдохновения на новые Crazy Lazy вкусы, которые тебе понравятся. Если у тебя есть идеи сочетаний, пиши нам 
      <a class=${s.linkInst} href=${LINKS.INSTAGRAM}>в Инстаграм!</a>
    `,
    },
  },
  {
    question: "Опасен ли Crazy Lazy для здоровья?",
    ask: {
      __html:
        "Наш напиток прошел все государственные проверки и одобрен всеми важными службами. В напитке содержится допустимое количество кофеина и таурина, напиток изготавливается по СТБ 539-2019 “Напитки безалкогольные”. Так что, не парься! ",
    },
  },
];

export const FAQBlock = () => {
  const [isBlockImage, setIsBlockImage] = useState(true);
  return (
    <div className={s.faqCont}>
      <div className={s.faqContent}>
        <h2 className={s.faqTitle}>
          Вопросики
          <span className={s.imgFaqTitle}>
            <img className={s.widthImg} src={kumkvat} alt="kumkvat" />
          </span>
        </h2>
        {questions.map((item, index) => {
          return (
            <FAQItem
              question={item}
              isFirst={!Boolean(index)}
              toggleImage={setIsBlockImage}
            />
          );
        })}
      </div>
      <img className={s.imgContleft} src={faqbg} alt="left" />
      {isBlockImage ? (
        <img className={s.imgContRight} src={faq_right_mob} alt="left" />
      ) : (
        ""
      )}
    </div>
  );
};
