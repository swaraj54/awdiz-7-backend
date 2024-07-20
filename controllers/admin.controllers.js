import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const LoginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body?.adminData;
    if (!email || !password) {
      return res.json({ success: false, error: "All fields are required." });
    }

    const isAdminExists = await Admin.findOne({ email: email });
    if (!isAdminExists) {
      return res.json({ success: false, error: "Email not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isAdminExists.password
    );
    console.log(isPasswordCorrect, "isPasswordCorrect");
    if (!isPasswordCorrect) {
      return res.json({ success: false, error: "Password is wrong." });
    }
    const adminData = { name: isAdminExists.name, email: isAdminExists.email };
    // add user data (context), add jwt token,

    const token = await jwt.sign(
      { adminId: isAdminExists._id },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    return res.json({
      success: true,
      message: "Login successfull.",
      adminData,
    });
  } catch (error) {
    return res.json({ success: falsse, error: error });
  }
};

export const RegisterAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body.adminData;
    if (!name || !email || !password) {
      return res.json({ success: false, error: "All fields are required." });
    }
    // check to check email is exists - findOne / find
    const isEmailExist = await Admin.findOne({ email: email });
    console.log(isEmailExist, "isEmailExist");
    if (isEmailExist) {
      return res.json({
        success: false,
        error: "Email is exists, please use another one.",
      });
    }
    // encrypt the password then store it in mongodb

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    const responseFromDb = await newAdmin.save();

    return res.json({
      success: true,
      message: "Registeration Successfull for admin.",
    });
  } catch (error) {
    console.log(error, "error");
    return res.json({ error: error, success: false });
  }
};
