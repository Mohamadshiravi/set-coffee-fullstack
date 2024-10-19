import BanUserModel from "@/models/banuser";
import userModel from "@/models/user";
import { CheckHashPass } from "@/utils/auth-utill/hashedpasscontrol";
import { JenerateAccessToken } from "@/utils/auth-utill/tokencontrol";
import ConnectTODb from "@/utils/connecttodb";

export async function POST(req) {
  ConnectTODb();

  const { identifier, password } = await req.json();

  const isUserBan = await BanUserModel.findOne({ email: identifier });
  if (isUserBan) {
    return Response.json({ message: "user is Ban" }, { status: 403 });
  }

  const isUserExist = await userModel.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });
  if (!isUserExist) {
    return Response.json({ message: "user Not found" }, { status: 404 });
  }

  const isPassValid = await CheckHashPass(password, isUserExist.password);
  if (!isPassValid) {
    return Response.json({ message: "password is incorrect" }, { status: 401 });
  }

  const userToken = await JenerateAccessToken({ email: isUserExist.email });
  return Response.json(
    { message: "You logedIn" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${userToken};path=/;httpOnly=true;maxAge=60*60*48`,
      },
    }
  );
}
