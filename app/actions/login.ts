"use server";
import { LoginSchema } from "@/app/schema";

import * as Z from "zod";
export const loginAction = async (
  values: Z.infer<typeof LoginSchema>
): Promise<{ message: string }> => {
  return new Promise((res, rej) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) rej({ message: "invalid  fields" });
    res({ message: "success" });
  });
};
