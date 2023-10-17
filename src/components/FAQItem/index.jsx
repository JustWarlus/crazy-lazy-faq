import React, { useState } from "react";
import s from "./faqItem.module.scss";
import arrow from "../../assets/img/arrow.svg";

export const FAQItem = ({ question, isFirst, toggleImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAsk = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      toggleImage(true);
    } else {
      toggleImage(false);
    }
  };
  return (
    <div
      className={s.faqItem}
      style={isFirst ? { marginTop: "25px" } : {}}
      onClick={() => toggleAsk()}>
      <span className={s.faqItemTitle}>
        {question.question}{" "}
        <img
          className={isOpen ? s.arrowClose : s.arrowStatic}
          src={arrow}
          alt="arrow"
        />
      </span>
      {isOpen ? (
        <span className={s.faqItemAsk} dangerouslySetInnerHTML={question.ask} />
      ) : (
        ""
      )}
    </div>
  );
};
