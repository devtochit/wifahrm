// pages/api/protected.js
import authMiddleware from "../../../";

export default function handler(req, res) {
  res.status(200).json({ message: "This is a protected route" });
}

// use the middleware function to protect the route
export const config = {
  api: {
    bodyParser: false,
  },
};
export default authMiddleware(handler);
