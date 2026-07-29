import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion = ({ questions }) => {
  const [openId, setOpenId] = useState(questions[0]?.id || null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {questions.map((q) => {
        const isOpen = openId === q.id;
        return (
          <div
            key={q.id}
            className={`glass-card rounded-2xl transition-all duration-300 border ${
              isOpen ? 'border-[#0F62FE]/40 shadow-lg bg-white' : 'border-white/60 bg-white/70 hover:bg-white'
            }`}
          >
            <button
              onClick={() => toggle(q.id)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm md:text-base focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle size={18} className={isOpen ? 'text-[#0F62FE]' : 'text-gray-400'} />
                <span>{q.question}</span>
              </div>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0F62FE]' : ''}`}
              />
            </button>
            
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                {q.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
