import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const nameRouter = createTRPCRouter({
  getName: publicProcedure.query(({ ctx }) => {
    return "John Doe";
  }),

  getRightName: protectedProcedure.query(({ ctx }) => {
    return "John Martin";
  }),
});
