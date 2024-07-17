
export default async function Faq() {
    return (
        <>
        <div className="flex justify-center items-center flex-col pb-20">
            <div className="flex flex-col w-1/3">
                <h1 className="text-4xl text-cyan-800 p-5 text-center">FAQ for Students</h1>
                <h2 className="font-bold">Q: How do I book a session with a tutor?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;To book a session, log in to your account, 
                        search for a tutor by subject or name, select a time 
                        slot that suits you, and confirm your booking.
                    </p>
                </div>

                <h2 className="font-bold">Q: What subjects can I get tutoring for?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;We offer tutoring in a wide range of subjects, 
                        including Math, Science, English, French, History, and many 
                        more for Grades 11 and 12.
                    </p>
                </div>

                <h2 className="font-bold">Q: How can I track my progress?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;Your progress can be tracked through the Student Dashboard, 
                        where you can view your grades, session history, and feedback 
                        from your tutors.
                    </p>
                </div>

                <h2 className="font-bold">Q: Can I reschedule or cancel a tutoring session?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;Yes, you can reschedule or cancel a session up to 24 hours 
                        before it starts. Simply go to your bookings in the Student 
                        Dashboard and make the necessary changes.
                    </p>
                </div>

                <h2 className="font-bold">Q: What should I do if I have technical issues during a session?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;If you encounter technical issues, please contact our support team 
                        immediately through the Help Center in your dashboard. They will assist 
                        you in resolving the issue.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-1/3">
                <h1 className="text-4xl text-cyan-800 p-5 text-center">FAQ for Tutors</h1>
                <h2 className="font-bold">Q: How do I become a tutor?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;To become a tutor, fill out our application form, 
                        submit your resume and cover letter, and tell us a 
                        bit about your work experience, education, passions, 
                        and interests.
                    </p>
                </div>
                
                <h2 className="font-bold">Q: What subjects can I teach?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;You can teach any subject you are qualified 
                        in and passionate about. Our platform supports a 
                        wide range of subjects for Grades 11 and 12.
                    </p>
                </div>

                <h2 className="font-bold">Q: How do I set my availability?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;You can set your availability in the Tutor 
                        Dashboard by selecting the days and times 
                        you are available to tutor.
                    </p>
                </div>

                <h2 className="font-bold">Q: How am I paid for my tutoring sessions?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;Tutors are paid on a bi-weekly basis via direct 
                        deposit. Payments are based on the completed sessions 
                        recorded in the system.
                    </p>
                </div>

                <h2 className="font-bold">Q: What should I do if a student cancels a session at the last minute?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;If a student cancels within 24 hours of the session start time, 
                        you may still be compensated. Please refer to our cancellation 
                        policy in the Tutor Resources section for more details.
                    </p>
                </div>

                <h2 className="font-bold">Q: How do I access teaching materials and resources?</h2>
                <div className="flex flex-row">
                    <h2 className="font-bold">A:</h2> 
                    <p className="font-normal">
                    &nbsp;Teaching materials and resources can be accessed through 
                        the Tutor Resources section in your dashboard. This section 
                        includes guidelines, best practices, and study materials to help 
                        you plan your lessons effectively
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}