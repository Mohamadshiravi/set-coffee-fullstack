import mongoose from "mongoose";

export default async function ConnectTODb() {
  const uri =
    "mongodb+srv://mohamadshiravi85:MTshirav1@cluster.4iwnc.mongodb.net/?retryWrites=true&w=majority&appName=setcoffee";
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect(uri);
  } catch (error) {}
}
