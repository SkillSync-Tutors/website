import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const studentRouter = createTRPCRouter({
  createProfile: protectedProcedure
    .input(z.object({
      userId: z.number(),
      grade: z.number(),
      subjectIds: z.array(z.number()),
      goalsAndObjectives: z.string(),
      tutoringPreference: z.enum(["IN_PERSON", "ONLINE", "BOTH"]),
    }))
    .mutation(async ({ input }) => {
      const student = await prisma.student.create({
        data: {
          user: { connect: { id: input.userId } },
          grade: input.grade,
          goalsAndObjectives: input.goalsAndObjectives,
          tutoringPreference: input.tutoringPreference,
          subjects: {
            connect: input.subjectIds.map(id => ({ id })),
          },
        },
      });
      return student;
    }),
});
