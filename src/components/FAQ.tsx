import React, { useState } from "react";

const FAQ: React.FC = () => {
  type FAQProps = {
    question: string;
    answer: string;
  };

  const faqs: FAQProps[] = [
    {
      question: "Can education flash cards be used for all age groups?",
      answer:
        "Yes, educational flashcards can be used for a wide range of age groups. They are versatile tools that can be adapted to different learning levels, from preschoolers to adults. Flashcards can cover various subjects and topics, making them suitable for diverse age ranges.",
    },
    {
      question: "How do educational flashcards work?",
      answer:
        "Educational flashcards work by presenting information on one side of the card, such as a question or problem, and the corresponding answer or solution on the other side. They leverage the principles of active recall and repetition to reinforce learning. By repeatedly reviewing the information on the cards, individuals can strengthen their memory and understanding of the subject matter.",
    },
    {
      question: "Can they be used for test prep?",
      answer:
        "Absolutely, educational flashcards are effective tools for test preparation. The process of using flashcards aligns with key study techniques like spaced repetition, which involves reviewing material at increasing intervals over time. This helps enhance long-term retention and recall, making flashcards particularly useful for preparing for exams or assessments. Users can create flashcards that cover important concepts, formulas, definitions, or any other information relevant to the test",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-16">
      <h1 className="text-3xl">FAQ</h1>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="my-4 border p-4 border-black w-[75vw] rounded-lg"
          >
            <h3
              className="text-xl font-semibold cursor-pointer flex justify-between"
              onClick={() => handleQuestionClick(index)}
            >
              <div>{faq.question}</div>
              <i className="ri-arrow-down-s-line"></i>
            </h3>
            {expandedIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
