'use client'

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const checkStudentProfile = api.student.checkProfile.useQuery(
    { email: session?.user?.email ?? "" },
    { enabled: !!session?.user?.email }
  );

  useEffect(() => {
    if (status === "authenticated" && checkStudentProfile.data) {
      if (!checkStudentProfile.data.exists) {
        router.push("/student-onboarding");
      } else {
        router.push("/dashboard");
      }
    }
  }, [status, checkStudentProfile.data, router]);

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col max-w-md">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign in to your account</h1>
          <p className="py-6">Choose your preferred method to sign in.</p>
        </div>
        <div className="card w-full bg-base-100 shadow-2xl">
          <div className="card-body">
            <button
              onClick={() => handleSignIn("google")}
              disabled={isLoading}
              className="btn btn-primary"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
            <button
              onClick={() => handleSignIn("github")}
              disabled={isLoading}
              className="btn btn-secondary mt-4"
            >
              <FaGithub className="mr-2" />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}