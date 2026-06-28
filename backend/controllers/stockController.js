const Stock = require("../models/Stock");

// Get all stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get stock by ID
const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    res.json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create stock (Admin)
const createStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);

    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update stock
const updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete stock
const deleteStock = async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);

    res.json({
      message: "Stock deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStocks,
  getStockById,
  createStock,
  updateStock,
  deleteStock,
};