import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbConfig } from "./db.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(dbConfig),
  session: { strategy: "jwt" },
  ...authConfig,
});
