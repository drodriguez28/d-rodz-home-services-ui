import React, { useState } from 'react';
import { ProfileCard } from "../reuse/ProfileCard";

export function ContactUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@drozhomeservices.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto mt-10 px-4 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg">Get in touch with us today for your home service needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Call Us or Text Us</h2>
          <a
            href="tel:404-573-3704"
            className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
          >
            404-573-3704
          </a>
        </div>

        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h2>
          <a href="mailto:info@drozhomeservices.com" className="text-lg text-red-800 hover:text-red-900 transition break-all">
            info@drozhomeservices.com
          </a>
          <button
            onClick={handleCopyEmail}
            className="mt-4 bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded transition flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
            </svg>
            {copied ? '✓ Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>

      {/* Profile Card Example */}
      <div className="flex justify-center mt-12">
        <ProfileCard
          image="/images/deivid.png"
          name="Deivid Rodriguez"
          title="Owner"
          showButtons={false}
        />
      </div>
    </div>
  );
}