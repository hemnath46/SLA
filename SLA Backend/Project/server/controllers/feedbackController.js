const Feedback = require("../models/Feedback");

exports.addFeedback = async (req, res) => {
  const fb = await Feedback.create(req.body);
  res.json(fb);
};

exports.getFeedback = async (req, res) => {
  const list = await Feedback.find().sort({ createdAt: -1 });
  res.json(list);
};

exports.deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
