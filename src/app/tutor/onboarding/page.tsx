'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function TutorDashboard() {
    const router = useRouter();
    const { data: session } = useSession();
    const checkUserStatus = api.user.checkStatus.useQuery(
        { userId: session?.user?.id ?? -1 },
        { enabled: !!session?.user?.id }
    );

    useEffect(() => {
        const handleRedirect = async () => {
            if (checkUserStatus.data?.onboarded) {
                router.push("/tutor/dashboard");
            }
        };
        handleRedirect();
    }, [checkUserStatus.data?.onboarded, router]);

    return (
        <div>
            <h1>We will be in touch with you soon! Check your inbox regularly.</h1>
        </div>
    );
}