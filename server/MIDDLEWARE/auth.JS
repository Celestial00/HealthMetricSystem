// middleware/auth.js
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.user = user; // Attach user info to the request
    next(); // Proceed to the next middleware/route handler
  });
};

module.exports = authenticateToken;
  