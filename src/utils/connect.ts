import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

const Connect = async () => {
  const dbUri = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUri);
    logger.info("connected to db successfully");
  } catch (error) {
    logger.error("could not connect to db");
    process.exit(1);
  }
};
export default Connect;
