import userModel from "@/models/user";
import IsUserAdmin from "@/utils/auth-utill/is-user-admin";

export async function DELETE(req, { params }) {
  const isUser = await IsUserAdmin();
  if (!isUser) {
    return Response.json({ message: "You have not access" }, { status: 403 });
  }
  try {
    await userModel.findOneAndDelete({ _id: params.id });
    return Response.json(
      { message: "user deleted" },
      {
        status: 200,
      }
    );
  } catch (e) {
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
