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
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("token : ", token);
      return token;
    },
  },
  adapter: PrismaAdapter(dbConfig),
  session: { strategy: "jwt" },
  ...authConfig,
});
