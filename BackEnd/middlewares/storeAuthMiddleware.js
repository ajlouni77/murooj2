const Store = require("../models/Store");

const storeAuthMiddleware = async (req, res, next) => {
  try {
    const { storeId } = req.params; // Assuming storeId is passed in the URL params

    if (!storeId) {
      return res.status(400).json({ message: "Store ID is required" });
    }

    // Find the store by ID
    const store = await Store.findById(storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Optionally: Verify if the store belongs to the authenticated user (e.g., if the store's owner matches req.userId)
    // if (store.ownerId.toString() !== req.userId) {
    //   return res.status(403).json({ message: "Unauthorized" });
    // }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Authorization error", error: error.message });
  }
};

module.exports = storeAuthMiddleware;
