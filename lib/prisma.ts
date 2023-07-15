// Declare global prisma variable to be used in the app. If it doesn't exist, create a new instance of PrismaClient.
// If it does exist, use the existing instance. This is to prevent hot reloading issues in development.

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
