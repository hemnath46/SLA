const User = require("../models/User");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // ADMIN LOGIN
  if (email === "admin@hems.in" && password === "admin123") {
    return res.json({ role: "admin" });
  }

  // USER LOGIN (simple)
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email, password });
  }

  res.json({ role: "user", email });
};
