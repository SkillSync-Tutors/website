"use client";

import * as React from "react";
import { useState } from "react";

function TutorApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subjects: '',
    yearsOfExperience: '',
    rate: '',
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
    console.log('Form data:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subjects: '',
      yearsOfExperience: '',
      rate: '',
    });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[100%] max-md:ml-0 ">
          <form onSubmit={handleSubmit} className="flex flex-col grow px-5  font-medium text-black ">
            <div className="text-6xl w-800 max-md:text-4xl">
              Tutor Application
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
                  className="shrink-0 mt-2 rounded-xl bg-zinc-300 h-10 p-2"
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
                  className="shrink-0 mt-2 rounded-xl bg-zinc-300 h-10 p-2"
                />
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shrink-0 mt-2.5 rounded-xl bg-zinc-300 h-10 p-2 w-full"
            />
            <div className="mt-6 max-md:max-w-full">Subjects</div>
            <input
              type="text"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              required
              className="shrink-0 mt-2.5 rounded-xl bg-zinc-300 h-10 p-2 max-md:max-w-full"
            />
            <div className="flex gap-2 mt-4 max-md:flex-wrap">
              <div className="flex flex-col flex-1">
                <div>Years of Experience</div>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  required
                  className="shrink-0 mt-2.5 rounded-xl bg-zinc-300 h-10 p-2 "
                />
              </div>
              <div className="flex flex-col flex-1">
                <div>Rate</div>
                <input
                  type="text"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  required
                  className="shrink-0 mt-2.5 rounded-xl bg-zinc-300 h-10 p-2 max-md:max-w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="justify-center items-start px-2 py-3 mt-4 text-md text-white whitespace-nowrap bg-cyan-800 rounded-xl w-20 max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TutorApplication;
