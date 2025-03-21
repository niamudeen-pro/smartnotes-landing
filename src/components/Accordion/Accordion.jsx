import React, { useState } from "react";
import { FAQ_ITEMS } from "../../utils/constants";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {FAQ_ITEMS.map((item, index) => {
        return (
          <AccordionItem
            key={item?.id}
            item={item}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        );
      })}
    </>
  );
}
