import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb://localhost:27017/menu-manager"
    );
    return con;
  } catch (error) {
    return error;
  }
};
