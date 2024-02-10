"use server";
import { generateVerificationTokenService } from "./generateVerificationTokenService";

import { signIn } from "@/auth";
import { LoginSchema } from "../../app/schema";
import * as Z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "../serverDetails/getUserDetails";
export const loginAction = async (
  values: any
): Promise<{ message: string; status: boolean }> => {
  try {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success)
      return { message: "invalid  fields", status: false };

    const existingUser = await getUserByEmail(values.email);
    if (!existingUser || !existingUser.email || !existingUser.password)
      return { message: "Email does not exists!", status: false };
    // if (!existingUser.emailVerified) {
    //   const verificationToken = await generateVerificationTokenService(
    //     existingUser.email
    //   );
    //   return {
    //     message: "Confirm your email id, new confirmation mail was sent",
    //     status: false,
    //   };
    // }

    await signIn("credentials", {
      ...values,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { message: "login successfull", status: true };
  } catch (error) {
    console.log("error: ", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials", status: false };
          break;
        default:
          return { message: "Something went wrong", status: false };
          break;
      }
    }
    return { message: "Invalid credentials", status: false };
  }
};
