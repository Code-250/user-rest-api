import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface schemaDocument extends mongoose.Document {
  user: UserDocument;
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, deafault: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", SessionSchema);
export default SessionModel;
