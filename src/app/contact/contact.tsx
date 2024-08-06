'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
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
      <div className="grid grid-cols-2 gap-3">
        <form
          onSubmit={handleSubmit}
          className="mr-auto ml-auto flex flex-col space-y-2 my-auto"
        >
          <h1 className="ml-auto mr-auto mb-4 mt-0 text-5xl">Contact Us</h1>
          <div className="flex gap-4 w-full">
            <label className="input flex items-center gap-2 text-black rounded-lg px-3 py-2 w-full">
              Name
              <input
                type="text"
                name="name"
                className="grow text-black"
                placeholder="First + Last"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="input flex items-center gap-2 text-black rounded-lg px-3 py-2 w-full">
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
          <label className="input flex items-center gap-2 text-black rounded-lg px-3 py-2 w-full">
            Subject:
            <input
              type="text"
              name="subject"
              className="grow text-black"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label className="input flex items-center gap-2 text-black rounded-lg px-3 py-2 w-full">
            Message:
            <textarea
              name="message"
              className="grow max-w-xs"
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

        <div>
          <div className="mr-auto ml-auto w-[76%] my-10">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1adaa6c4d0c9d249d1cede565fba6576c5709682d7e00b57fc1efb5c8a1aa377?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d"
              alt="Contact image"
              width={1600}
              height={900}
              className="mt-9 rounded-lg w-full aspect-[1.41] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
