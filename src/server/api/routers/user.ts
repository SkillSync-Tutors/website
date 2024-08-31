import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRouter = createTRPCRouter({
  checkStatus: protectedProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await prisma.user.findUnique({
        where: { id: input.userId },
        select: {
          userType: true,
          onboarded: true,
        },
      });

      return {
        userType: user?.userType ?? "UNSPECIFIED",
        onboarded: user?.onboarded ?? false,
      };
    }),

  updateUserType: protectedProcedure
    .input(z.object({ userType: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      await prisma.user.update({
        where: { id: userId },
        data: { userType: input.userType },
      });
    }),

  updateOnboarded: protectedProcedure
    .input(z.object({ onboarded: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      await prisma.user.update({
        where: { id: userId },
        data: { onboarded: input.onboarded },
      });
    }),
});