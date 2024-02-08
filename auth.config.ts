import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./app/schema";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./app/serverDetails/getUserDetails";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("credentials: ", credentials);
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          console.log("user   config: ", user);
          if (!user) return null;
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
