"use server";
import { RegisterSchema } from "@/app/schema";
import { dbConfig } from "@/db.config";
import * as bcrypt from "bcrypt";
import * as Z from "zod";
import { getUserByEmail } from "../serverDetails/getUserDetails";
export const registerAction = async (
  values: Z.infer<typeof RegisterSchema>
): Promise<{ message: string }> => {
  return new Promise(async (res, rej) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) rej({ message: "invalid  fields" });
    //@ts-ignore
    const { email, password, name } = validatedFields?.data;
    // const salt = await bcrypt.genSalt(10);
    // console.log("salt: ", salt);
    // const hashedPassword = await bcrypt.hash(password, 10);
    const isEmailExists = await getUserByEmail(email);
    if (!!isEmailExists) return { error: "Email already exists" };
    console.log("hit here ");
    await dbConfig.user.create({
      data: {
        name,
        email,
        //@ts-ignore
        password,
      },
    });
    res({ message: "hello" });
  });
};
