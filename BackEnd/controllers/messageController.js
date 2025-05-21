// controllers/messageController.js
const messageModel = require("../models/Contact.js");

const getMessages = (req, res) => {
  const messages = messageModel.find();
  res.json(messages);
};

const replyToMessage = (req, res) => {
  const { messageId } = req.params;
  const { reply } = req.body;

  const updatedMessage = messageModel.addReplyToMessage(
    parseInt(messageId),
    reply
  );

  if (updatedMessage) {
    res.json({
      message: "تم إرسال الرد بنجاح",
      replies: updatedMessage.replies,
    });
  } else {
    res.status(404).json({ error: "الرسالة غير موجودة" });
  }
};

module.exports = {
  getMessages,
  replyToMessage,
};
