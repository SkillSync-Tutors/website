import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const studentRouter = createTRPCRouter({
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