import { object, string } from "zod";
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(8, "password must be at least 8 chars"),
    passwordComfirmation: string({
      required_error: "password comfirmation is required",
    }),
    email: string({
      required_error: "email is required",
    }).email("email must be valid"),
  }).refine((data) => data.password === data.passwordComfirmation, {
    message: "password does not match",
    path: ["passwordComfirmation"],
  }),
});
