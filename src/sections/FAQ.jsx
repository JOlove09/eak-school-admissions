
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "Complete the enquiry form on our website to begin. Our admissions team will guide you through the application and document requirements.",
  },
  {
    question: "Which classes are accepting applications?",
    answer:
      "Applications are open for Grades 1 to 12 for the academic session 2027–28, subject to seat availability.",
  },
  {
    question: "Is an entrance assessment required?",
    answer:
      "An age-appropriate assessment or student interaction may be conducted depending on the grade applied for.",
  },
  {
    question: "What documents are required?",
    answer:
      "You will need a birth certificate, previous school records, photographs, address proof, and a parent or guardian identity document.",
  },
  {
    question: "How can I schedule a campus visit?",
    answer:
      "Use the Schedule a Visit button to complete the demo campus visit form and select your preferred date.",
  },
  {
    question: "Where can I find the school fee structure?",
    answer:
      "The Fee Information section provides the indicative annual and admission fees for different grade levels.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <span className="section-label">HERE TO HELP</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions
          about admissions at EAK International School.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div className="faq-item" key={faq.question}>
              <h3>
                <button
                  className="faq-question"
                  id={`faq-question-${index}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  {isOpen ? <Minus size={21} /> : <Plus size={21} />}
                </button>
              </h3>

              {isOpen && (
                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
