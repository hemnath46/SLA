const User = require('../models/user');

exports.postData = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};