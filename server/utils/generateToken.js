import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    // make it secure in production but in development secure is false
    secure: process.env.NODE_ENV !== "development",
    // make same site in strict mode to prevent csrf attacks
    sameSite: "strict",
    // when token expires I'm gonna it to the same thing as the token which is gonna 30 days now
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
