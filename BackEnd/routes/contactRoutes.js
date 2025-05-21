// const express = require("express");
// const router = express.Router();
// const { sendMessage } = require("../controllers/contactController");

// router.post("/", sendMessage);

// module.exports = router;


const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// إرسال رسالة جديدة
router.post("/", contactController.sendMessage);

// جلب جميع الرسائل (غير المحذوفة)
router.get("/", contactController.getMessages);


// Soft Delete للرسالة
router.delete("/:id", contactController.deleteMessage);


module.exports = router;