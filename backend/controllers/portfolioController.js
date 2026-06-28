const Portfolio = require("../models/Portfolio");

// Get logged-in user's portfolio
const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({ user: req.user.id })
      .populate("stock");

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add stock to portfolio
const addPortfolio = async (req, res) => {
  try {
    const { stock, quantity, investedAmount } = req.body;

    const portfolio = await Portfolio.create({
      user: req.user.id,
      stock,
      quantity,
      investedAmount,
    });

    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete portfolio entry
const deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);

    res.json({
      message: "Portfolio item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPortfolio,
  addPortfolio,
  deletePortfolio,
};