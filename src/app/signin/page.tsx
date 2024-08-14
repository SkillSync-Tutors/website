'use client'

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkOnboardingStatus = api.student.checkOnboardingStatus.useQuery(
    { userId: session?.user?.id ?? 0 },
    { enabled: !!session?.user?.id }
  );

  useEffect(() => {
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setError('An error occurred during sign in. Please try again.');
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      checkOnboardingStatus.refetch();
    }
  }, [status, session]);

  useEffect(() => {
    if (checkOnboardingStatus.data) {
      if (checkOnboardingStatus.data.onboardingCompleted) {
        router.push("/dashboard");
      } else {
        router.push("/student-onboarding");
      }
    }
  }, [checkOnboardingStatus.data, router]);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await signIn("google", { callbackUrl: "/signin", redirect: false });
      if (result?.error) {
        setError(result.error);
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading" || checkOnboardingStatus.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col max-w-md">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign in to your account</h1>
          <p className="py-6">Sign in with your Google account.</p>
        </div>
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}
        <div className="card w-full bg-base-100 shadow-2xl">
          <div className="card-body">
            <button
              onClick={handleSignIn}
              disabled={isLoading}
              className="btn btn-primary"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}