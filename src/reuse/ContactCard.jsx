import { useState } from "react";

export function ContactCard({ 
  title = "Call, text, or email us to get your FREE ESTIMATE today!",
  phone = "404-573-3704",
  email = "info@drozhomeservices.com"
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mb-12 bg-white p-8 rounded shadow-lg max-w-2xl mx-auto">
      <p className="text-3xl font-bold text-yellow-400 mb-6">{title}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href={`tel:${phone}`}
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
        >
          Call Us: {phone}
        </a>
        <a
          href={`sms:${phone}`}
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
        >
          Text Us: {phone}
        </a>
      </div>

      <div>
        <a href={`mailto:${email}`} className="block text-lg text-red-800 hover:text-red-900 transition break-all">
          {email}
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
  );
}