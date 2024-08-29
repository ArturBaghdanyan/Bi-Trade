import {
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import style from "./style.module.scss";
import plusIcon from '../../../assets/section/accordion-plus.svg';
import minusIcon from '../../../assets/section/accordion-minus.svg';

import React, { useState } from 'react';

export const AccordionItemComponent = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
      const [textColor, setTextColor] = useState('white');
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
      const handleTextClick = () => {
      setTextColor(textColor === 'white' ? 'rgba(0, 166, 118, 1)' : 'white');
    };
  
    return (
      <AccordionItem className={style.accordion_item}>
        <AccordionItemHeading onClick={toggleAccordion} className={style.accordion_heading}>
          <AccordionItemButton className={style.accordion_button}>
            <h3 onClick={handleTextClick} 
                          style={{ color: textColor }}
                      >
                          {item.question}
                      </h3> 
                      <img src={isOpen ? minusIcon : plusIcon} alt="plus" />
          </AccordionItemButton>
        </AccordionItemHeading>
        {isOpen && (
          <AccordionItemPanel>
            <p>{item.answer}</p>
          </AccordionItemPanel>
        )}
      </AccordionItem>
    );
  };
  