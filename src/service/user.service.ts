import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../model/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function validatepassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }
  const isValid = user.comparePassword(password);

  if (!isValid) {
    return false;
  }
  return omit(user.toJSON(), "password");
}