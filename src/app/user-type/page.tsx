'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import { api } from '~/trpc/react';

export default function UserTypeSelection() {
  const router = useRouter();
  const updateUserType = api.user.updateUserType.useMutation();

  const handleUserTypeSelect = async (userType: string) => {
    try {
      await updateUserType.mutateAsync({ userType });
      router.push(userType === 'TUTOR' ? '/tutor/onboarding' : '/student/onboarding');
    } catch (error) {
      console.error('Failed to update user type', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Select Your User Type</h1>
      <div className="flex gap-4">
        <button
          className="btn btn-primary"
          onClick={() => handleUserTypeSelect('TUTOR')}
        >
          Tutor
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleUserTypeSelect('STUDENT')}
        >
          Student
        </button>
      </div>
    </div>
  );
};