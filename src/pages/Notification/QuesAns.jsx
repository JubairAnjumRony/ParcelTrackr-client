import { useState } from 'react';

const QuesAns = () => {
     

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    
    const questionsAndAnswers = [
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
          question: 'What is Tailwind CSS?',
          answer: 'Tailwind CSS is a utility-first CSS framework for creating custom designs directly in your HTML.',
        },
        {
          question: 'What are components in React?',
          answer: 'Components are reusable pieces of UI in React, which help in building complex interfaces.',
        },
      ];
    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">FAQs</h1>
        <div className="space-y-4">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-300"
              >
                <span className="text-gray-800 font-medium">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-white text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
}

export default QuesAns;