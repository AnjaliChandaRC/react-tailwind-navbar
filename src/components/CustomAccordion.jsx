import React, { useState } from "react";

const CustomAccordion = () => {
  const faqs = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nisi qui veritatis dolore unde itaque quaerat eveniet earum eaque velit in cum, aspernatur et aliquid dolor accusamus soluta alias consequuntur!",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nisi qui veritatis dolore",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nisi qui veritatis dolore",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="font-black text-center text-4xl pb-10">
        Custom Accordion Tailwind
      </h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-[130px]" : "max-h-0"
            }`}
          >
            <div className="text-gray-700 p-4">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
