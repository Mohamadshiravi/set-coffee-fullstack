import BanUserModel from "@/models/banuser";
import userModel from "@/models/user";
import { HashPassword } from "@/utils/auth-utill/hashedpasscontrol";
import { JenerateAccessToken } from "@/utils/auth-utill/tokencontrol";
import ValidateUserObj from "@/utils/auth-utill/userObjectValidator";
import ConnectTODb from "@/utils/connecttodb";

export async function POST(req) {
  ConnectTODb();

  const { name, username, email, password } = await req.json();

  const isUserBan = await BanUserModel.findOne({ email });
  if (isUserBan) {
    return Response.json({ message: "user is Ban" }, { status: 403 });
  }

  const isUserExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserExist) {
    return Response.json({ message: "user alerdy exist" }, { status: 409 });
  }

  const isDataValid = await ValidateUserObj({
    name,
    username,
    email,
    password,
  });
  if (isDataValid[0]) {
    return Response.json({ message: "data is not Valid" }, { status: 422 });
  }
  try {
    const userToken = await JenerateAccessToken({ email });
    const hashedPassword = await HashPassword(password);
    const isAdmin = await userModel.findOne({ role: "ADMIN" });
    await userModel.create({
      name,
      username,
      email,
      password: hashedPassword,
      role: isAdmin ? "USER" : "ADMIN",
    });
    return Response.json(
      { message: "user Created" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${userToken};path=/;httpOnly=true;maxAge=60*60*48`,
        },
      }
    );
  } catch (error) {}
  return Response.json({ message: "data is Valid" });
}
