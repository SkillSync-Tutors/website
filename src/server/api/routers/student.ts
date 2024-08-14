import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const studentRouter = createTRPCRouter({
  checkOnboardingStatus: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      console.log("Checking onboarding status for email:", input.email);
      
      const user = await prisma.user.findUnique({
        where: { email: input.email },
        include: { student: true, tutor: true },
      });

      console.log("User found:", user);

      if (!user) {
        console.log("No user found, onboarding not completed");
        return { onboardingCompleted: false };
      }

      const onboardingCompleted = !!(user.student || user.tutor);
      console.log("Onboarding completed:", onboardingCompleted);

      return { onboardingCompleted };
    }),

  checkProfile: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const student = await prisma.student.findUnique({
        where: { email: input.email },
      });
      return { exists: !!student };
    }),

  createProfile: protectedProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email(),
      grade: z.number(),
      subjectIds: z.array(z.number()),
      goalsAndObjectives: z.string(),
      tutoringPreference: z.enum(["IN_PERSON", "ONLINE", "BOTH"]),
    }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          role: "STUDENT",
          student: {
            create: {
              grade: input.grade,
              goalsAndObjectives: input.goalsAndObjectives,
              tutoringPreference: input.tutoringPreference,
              subjects: {
                connect: input.subjectIds.map(id => ({ id })),
              },
            },
          },
        },
        include: {
          student: true,
        },
      });
      return user.student;
    }),

  getAllSubjects: publicProcedure.query(async () => {
    const subjects = await prisma.subject.findMany();
    return subjects;
  }),
});