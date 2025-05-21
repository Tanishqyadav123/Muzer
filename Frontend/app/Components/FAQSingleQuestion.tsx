"use client";

import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function FAQSingleQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="min-h-[8vh] w-[60%] p-6 mt-6   mx-auto flex items-start flex-col gap-4">
      <div className="flex items-center  justify-between w-[100%]">
        <h1>{question}</h1>
        {isOpen ? (
          <FaChevronUp className="cursor-pointer" onClick={handleToggleOpen} />
        ) : (
          <FaChevronDown
            className="cursor-pointer"
            onClick={handleToggleOpen}
          />
        )}
      </div>
      {isOpen && <h2>{answer}</h2>}
    </div>
  );
}

export default FAQSingleQuestion;
