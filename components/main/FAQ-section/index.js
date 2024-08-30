import { Accordion } from 'react-accessible-accordion';
import style from "./style.module.scss";
import { accordionData } from '../../../data/acccordion';
import { AccordionItemComponent } from './accordion-items';
import React from 'react';

const AccordionComponent = () => {
  return (
    <section style={{ backgroundColor: '#0B1F1AFF' }}>
      <div className={style.accordion}>
        <h2>
          Most common <b>FAQ</b>
        </h2>
				<div className={style.accordion_list}>

          {/* First Column of Accordion Items */}
        <Accordion className={style.accordion_list_column}>
					{accordionData.map((item) => (
            <AccordionItemComponent key={item.id} item={item} />
          ))}
					</Accordion>

          {/* Second Column of Accordion Items, sorted by ID */}
				<Accordion className={style.accordion_list_column}>
          {accordionData.sort((a, b) => a.id - b.id).map((item) => (
            <AccordionItemComponent key={item.id} item={item} />
          ))}
        </Accordion>
				</div>

      </div>
    </section>
  );
};

export default AccordionComponent;
