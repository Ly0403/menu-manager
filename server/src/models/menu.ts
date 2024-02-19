import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    isRequired: true,
  },
});

export default mongoose.model("menus",menuSchema);
