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
        {
            question: 'What is the Virtual DOM?',
            answer: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM, allowing React to update only the necessary parts of the UI.',
          },
          {
            question: 'What are React hooks?',
            answer: 'Hooks are functions that let you use state and other React features without writing a class.',
          },
          {
            question: 'What is JSX?',
            answer: 'JSX is a syntax extension for JavaScript that looks similar to HTML, used in React to describe the UI.',
          },
          {
            question: 'What is a state in React?',
            answer: 'State is an object that holds data that can change over the lifecycle of a component.',
          },
          {
            question: 'What is a prop in React?',
            answer: 'Props are short for properties and are used to pass data from one component to another.',
          },
          {
            question: 'What is the difference between state and props?',
            answer: 'State is managed within the component and can change over time, while props are read-only and passed to the component from its parent.',
          },
          {
            question: 'What is React Router?',
            answer: 'React Router is a library for managing navigation and routing in React applications.',
          }
      ];
    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl shadow-xl my-6 ">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 ">FAQs</h1>
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