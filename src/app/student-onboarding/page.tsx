'use client'

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

const subjects = [
  "Math", "Science", "English", "History", "Physics", "Chemistry", "Biology",
  "Literature", "Computer Science", "Foreign Language", "Art", "Music"
];

export default function StudentOnboarding() {
  const { data: session } = useSession();
  const router = useRouter();
  const [studentInfo, setStudentInfo] = useState({
    grade: "",
    subjects: [] as string[],
    dreamProgram: ""
  });

  const createProfile = api.student.createProfile.useMutation({
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Error creating student profile:", error);
      // You might want to show an error message to the user here
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubjects = Array.from(e.target.selectedOptions, option => option.value);
    setStudentInfo(prev => ({ ...prev, subjects: selectedSubjects }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (session?.user?.name && session?.user?.email) {
      createProfile.mutate({
        name: session.user.name,
        email: session.user.email,
        grade: parseInt(studentInfo.grade),
        subjects: studentInfo.subjects,
        dreamProgram: studentInfo.dreamProgram,
      });
    }
  };

  if (!session) {
    return <div>Please sign in to complete your profile.</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-6">Complete Your Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">What grade are you in?</span>
              </label>
              <select 
                className="select select-bordered w-full" 
                name="grade"
                value={studentInfo.grade}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Grade</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i+1}>Grade {i+1}</option>
                ))}
              </select>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Which subjects do you need help with?</span>
              </label>
              <select 
                multiple
                className="select select-bordered w-full"
                value={studentInfo.subjects}
                onChange={handleSubjectChange}
                required
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">What is your dream college program?</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. Computer Science at MIT" 
                className="input input-bordered" 
                name="dreamProgram"
                value={studentInfo.dreamProgram}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary ${createProfile.isLoading ? 'loading' : ''}`}
                disabled={createProfile.isLoading}
              >
                {createProfile.isLoading ? 'Submitting...' : 'Complete Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}