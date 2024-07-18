import { model, Schema } from "mongoose";

const adminSchema = new Schema({
  name: String,
  email: String,
  password: { type: String, required: true },
});

const Admin = model("Admin", adminSchema);

export default Admin;
