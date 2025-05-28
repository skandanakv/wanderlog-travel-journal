// middleware/authMiddleware.js

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  console.log("🧪 Raw Authorization Header:", token);

  if (!token) {
    console.log("🚫 No token provided.");
    return res.status(401).json({ msg: "No token. Auth denied." });
  }

  const parts = token.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    console.log("🚫 Malformed token. Parts:", parts);
    return res.status(401).json({ msg: "Token is not valid." });
  }

  const realToken = parts[1];
  console.log("✅ Extracted token:", realToken);

  try {
    console.log("🔐 Verifying with secret:", process.env.JWT_SECRET);
    const decoded = jwt.verify(realToken, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("❌ Token verification failed:", err.message);
    return res.status(401).json({ msg: "Token is not valid." });
  }
};
