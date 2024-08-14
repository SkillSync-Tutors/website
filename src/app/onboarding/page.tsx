'use client'

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

type Subject = {
  id: number;
  name: string;
};

export default function StudentOnboarding() {
  const { data: session } = useSession();
  const router = useRouter();
  const [studentInfo, setStudentInfo] = useState({
    grade: "",
    subjectIds: [] as number[],
    goalsAndObjectives: "",
    tutoringPreference: "BOTH",
  });
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const createProfile = api.student.createProfile.useMutation({
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Error creating student profile:", error);
      // You might want to show an error message to the user here
    },
  });

  const { data: subjectsData } = api.student.getAllSubjects.useQuery();

  useEffect(() => {
    if (subjectsData) {
      setSubjects(subjectsData);
    }
  }, [subjectsData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubjectIds = Array.from(e.target.selectedOptions, option => parseInt(option.value));
    setStudentInfo(prev => ({ ...prev, subjectIds: selectedSubjectIds }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (session?.user?.id) {
      createProfile.mutate({
        userId: session.user.id,
        grade: parseInt(studentInfo.grade),
        subjectIds: studentInfo.subjectIds,
        goalsAndObjectives: studentInfo.goalsAndObjectives,
        tutoringPreference: studentInfo.tutoringPreference as "IN_PERSON" | "ONLINE" | "BOTH",
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
                <span className="label-text">Grade</span>
              </label>
              <input
                type="number"
                name="grade"
                value={studentInfo.grade}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subjects</span>
              </label>
              <select
                multiple
                name="subjectIds"
                value={studentInfo.subjectIds.map(String)}
                onChange={handleSubjectChange}
                className="select select-bordered"
                required
              >
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Goals and Objectives</span>
              </label>
              <textarea
                name="goalsAndObjectives"
                value={studentInfo.goalsAndObjectives}
                onChange={handleInputChange}
                className="textarea textarea-bordered h-24"
                placeholder="Describe your short-term and long-term academic goals, career aspirations, etc."
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tutoring Preference</span>
              </label>
              <select
                name="tutoringPreference"
                value={studentInfo.tutoringPreference}
                onChange={handleInputChange}
                className="select select-bordered"
                required
              >
                <option value="IN_PERSON">In-Person</option>
                <option value="ONLINE">Online</option>
                <option value="BOTH">Both In-Person and Online</option>
              </select>
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