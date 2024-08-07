import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
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
      subjects: z.array(z.string()),
      dreamProgram: z.string(),
    }))
    .mutation(async ({ input }) => {
      const student = await prisma.student.create({
        data: {
          name: input.name,
          email: input.email,
          grade: input.grade,
          school: "", // You might want to add this to the onboarding form
          join_date: new Date(),
          parent_id: 1, // You'll need to handle parent association
          last_login: new Date(),
          profile_picture: "", // You might want to handle this separately
          active: true,
          // Handle subjects association if needed
        },
      });
      return student;
    }),
});