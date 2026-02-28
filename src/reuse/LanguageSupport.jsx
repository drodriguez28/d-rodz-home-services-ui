import React from 'react';

export function LanguageSupport({ className = "" }) {
  return (
    <div className={`text-center py-4 ${className}`}>
      <p className="text-xl md:text-2xl font-bold text-gray-900">
        We Speak <span className="text-red-600 font-extrabold">English</span> & <span className="text-red-600 font-extrabold">Spanish</span> ! 
      </p>
    </div>
  );
}