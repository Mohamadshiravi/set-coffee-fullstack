import { sign, verify } from "jsonwebtoken";

export async function JenerateAccessToken(payload) {
  const res = sign({ ...payload }, process.env.AccessTokenKey, {
    expiresIn: "48h",
  });
  return res;
}
export async function ValidateToken(token) {
  try {
    const res = await verify(token, process.env.AccessTokenKey);
    return res;
  } catch (e) {
    return false;
  }
}
export async function JenerateRefreshToken(payload) {
  const res = sign({ ...payload }, process.env.RefreshTokenKey, {
    expiresIn: "15d",
  });
  return res;
}
