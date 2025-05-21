const Store = require("../models/Store");


// Create a new store
exports.createStore = async (req, res) => {
  const { storeName, email, phone, address, openHours, paymentMethods } =
    req.body;
  const ownerId = req.userId; // This should be set in your authentication middleware (authenticateUser)

  try {
    const newStore = new Store({
      storeName,
      email,
      phone,
      address,
      openHours,
      paymentMethods,
      ownerId,
    });

    // Save the new store to the database
    await newStore.save();
    res.status(201).json(newStore); // Respond with the newly created store
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating store" });
  }
};

// Update an existing store
exports.updateStore = async (req, res) => {
  const { storeId } = req.params;
  const { storeName, email, phone, address, openHours, paymentMethods } =
    req.body;

  try {
    const store = await Store.findByIdAndUpdate(
      storeId,
      { storeName, email, phone, address, openHours, paymentMethods },
      { new: true }
    );

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    res.json(store); // Respond with the updated store
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating store" });
  }
};

// Delete a store
exports.deleteStore = async (req, res) => {
  const { storeId } = req.params;

  try {
    const store = await Store.findByIdAndDelete(storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    res.status(200).json({ message: "Store deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting store" });
  }
};
