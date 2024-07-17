"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
    // Reset forma
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-7/12">
          <form onSubmit={handleSubmit} className="flex flex-col grow px-5 text-sm font-medium text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl max-md:max-w-full max-md:text-4xl">
              Contact Us
            </div>
            <div className="mt-12 text-base max-md:mt-10 max-md:max-w-full">
              Name (required)
            </div>
            <div className="flex gap-2 mt-4 max-md:flex-wrap">
              <div className="flex flex-col flex-1">
                <div>First Name</div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="shrink-0 mt-2 rounded-3xl bg-zinc-300 h-10 p-2"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div>Last Name</div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="shrink-0 mt-2 rounded-3xl bg-zinc-300 h-10 p-2"
                />
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">Email (required)</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shrink-0 mt-2.5 rounded-3xl bg-zinc-300 h-10 p-2 max-md:max-w-full"
            />
            <div className="mt-6 max-md:max-w-full">Subject (required)</div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="shrink-0 mt-2.5 rounded-3xl bg-zinc-300 h-10 p-2 max-md:max-w-full"
            />
            <div className="mt-7 max-md:max-w-full">Message (required)</div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="shrink-0 mt-2 rounded-3xl bg-zinc-300 h-20 p-2 max-md:max-w-full"
            ></textarea>
            <button
              type="submit"
              className="justify-center items-start px-6 py-6 mt-4 text-lg text-white whitespace-nowrap bg-cyan-800 rounded-xl w-20 max-md:px-5"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-5/12">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1adaa6c4d0c9d249d1cede565fba6576c5709682d7e00b57fc1efb5c8a1aa377?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d"
            alt="Contact image"
            width={1600}
            height={900}
            className="mt-9 w-full aspect-[1.41] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;