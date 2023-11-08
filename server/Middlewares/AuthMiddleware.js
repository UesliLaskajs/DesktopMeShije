const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) return res.json({ status: true, user: user.username })
            else return res.json({ status: false })
        }
    })
}

module.exports.isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
      return res.status(401).json({ error: "Unauthorized access" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
      if (err) {
          return res.status(401).json({ error: "Unauthorized access" });
      } else {
          req.userId = data.id; // Add user ID to request object for further use if needed
          next(); // User is authenticated, proceed to the next middleware or route handler
      }
  });
};