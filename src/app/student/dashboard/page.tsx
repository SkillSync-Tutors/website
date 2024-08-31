'use client'

import { signOut } from 'next-auth/react';

export default function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <button
        onClick={() =>
          signOut({
            callbackUrl: '/', // Redirect to home page after sign-out
          })
        }
      >
        Sign Out
      </button>
    </div>
  );
}