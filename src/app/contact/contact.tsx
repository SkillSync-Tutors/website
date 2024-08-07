'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <div className="py-20 grid grid-cols-2 gap-3 bg-customGrey px-20">
        <div className="mx-20 my-5">
          <h1 className="text-[50px] text-customCyan font-semibold">
            Contact Us
          </h1>
          <p className="mt-6">
            Have questions or need assistance? We're here to help! Reach out to
            us anytime, and we'll get back to you as soon as possible.
          </p>
          <p className="mt-6">SkillSyncTutors@gmail.com</p>
          <p>(416) 930-8976</p>
          <button className="btn btn-primary mt-5">
            Frequently Asked Questions
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mr-auto ml-auto flex flex-col space-y-2 my-auto pt-8"
        >
          <label className="input flex items-center gap-2 text-black border-black rounded-lg px-3 py-2 w-full">
            First Name
            <input
              type="text"
              name="firstName"
              className="grow text-black"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className="input flex items-center gap-2 text-black border-black rounded-lg px-3 py-2 w-full">
            Last Name
            <input
              type="text"
              name="lastName"
              className="grow text-black"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label className="input flex items-center gap-2 text-black border-black rounded-lg px-3 py-2 w-full">
            Email:
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="user@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="input flex items-center gap-2 text-black border-black rounded-lg px-3 py-2 w-full">
            Subject:
            <input
              type="text"
              name="subject"
              className="grow text-black"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label className="input flex items-center gap-2 text-black border-black rounded-lg px-3 py-2 w-full">
            Message:
            <textarea
              name="message"
              className="grow max-w-xs max-h-9"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-end w-full">
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
