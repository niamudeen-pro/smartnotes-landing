import React from "react";
import arrowIcon from "../../assets/svg/colored-arrow.svg";
import arrowRightIcon from "../../assets/svg/colored-arrow-right.svg";

export default function AccordionItem({
  item,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpen = openIndex === index;

  return (
    <div>
      {/* Accordion Header */}
      <div
        className="flex cursor-pointer items-center justify-between rounded-lg border border-secondary-200 px-6 py-4"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <p className="text-med text-left text-primary-100">{item.question}</p>
        <img
          src={arrowIcon}
          alt=""
          className="h-8 w-8 rounded-lg border border-secondary-200 transition-transform duration-300"
        />
      </div>

      {/* Accordion Content with Smooth Transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen
            ? "visible mt-5 max-h-[200px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div
          data-lenis-prevent
          className="max-h-48 space-y-4 overflow-auto rounded-xl border border-secondary-200 bg-accent px-6 py-4 text-left text-black"
        >
          <div className="flex justify-between">
            <p className="text-med">{item.answerHeading}</p>
            <img
              src={arrowRightIcon}
              alt=""
              className="h-8 w-8 rounded-lg border border-secondary-200"
            />
          </div>
          <p className="text-reg">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
