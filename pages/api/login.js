import ConnectMongo from "../../helper/initDb";
import { UserList } from "../../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

ConnectMongo();
const loginApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const response = {
        success: false,
        message: "Please enter email or password",
      };
      throw response;
    }
    const user = await UserList.findOne({ email });
    if (!user) {
      const response = {
        success: false,
        message: "Email or password is not matched",
      };
      throw response;
    }
    const matchpassword = await bcrypt.compare(password, user.password);
    if (!matchpassword) {
      const response = {
        success: false,
        message: "Email or password is not",
      };
      throw response;
    } else {
      const token = jwt.sign(
        {
          name: user.name,
          role: user.role,
          email: user.email,
          lname: user.lname,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { fname, lname, role, email } = user;
      res.status(200).json({
        success: true,
        message: "Login successfully",
        token: token,
        user: { fname, role, email, lname },
      });
    }
  } catch (error) {
    res.status(500).send({ sucess: false, message: error.message });
  }
};

export default loginApi;
