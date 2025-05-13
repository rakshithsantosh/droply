import * as z from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, {
      message: "email is required",
    })
    .email({ message: "enter a valid message" }),
  password: z
    .string()
    .min(1, { message: "password is required" })
    .min(8, { message: "password should be a minimun of 8 characters" }),
});
