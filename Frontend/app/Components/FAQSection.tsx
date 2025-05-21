import React from "react";
import { FAQDetails } from "../lib/FAQDetails";
import FAQSingleQuestion from "./FAQSingleQuestion";

function FAQSection() {
  return (
    <div className="w-full mt-12  ">
      <div className="min-h-[40vh] w-full">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-2 ">
          Frequently Asked Questions
        </h2>

        <div className="faq min-h-[30vh] py-5">
          {FAQDetails.map(
            (faq: { question: string; answer: string }, index) => {
              return (
                <FAQSingleQuestion
                  question={faq.question}
                  answer={faq.answer}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
