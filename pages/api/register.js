import bcrypt from "bcrypt";
import ConnectMongo from "../../helper/initDb";
import { UserList } from "../../models/UserModel";

ConnectMongo();
const registerApi = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
      let response = {
        success: false,
        message: " please register all field",
      };
      throw response;
    }
    const user = await UserList.findOne({ email });
    if (user) {
      let response = {
        success: false,
        message: "Email already register",
      };
      throw response;
    }
    const hasedPassword = await bcrypt.hash(password, 14);
    const newUser = await new UserList({
      fname,
      lname,
      email,
      password: hasedPassword,
    }).save();
    res
      .status(201)
      .send({ success: true, message: "Register successfully", data: newUser });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

export default registerApi;
