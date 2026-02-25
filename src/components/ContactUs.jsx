import React, { useEffect } from 'react';
import { ProfileCard } from "../reuse/ProfileCard";
import { ContactCard } from "../reuse/ContactCard";
import ServiceAreaMap from '../reuse/ServiceAreaMap';

export function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto mt-10 px-4 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg">Get in touch with us today for your home service needs</p>
      </div>

      <ContactCard />
      <ServiceAreaMap />

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