const express = require("express");
const router = express.Router();
const housingController = require("../controllers/housingController");

// Get all housing listings with filtering
router.get("/", housingController.getAllHousings);

// Get housing by city
router.get("/city/:cityName", housingController.getHousingByCity);

// Get housing by price range
router.get("/price-range", housingController.getHousingByPriceRange);

// Get a single housing listing
router.get("/:id", housingController.getHousingById);

// Create a new housing listing
router.post("/", housingController.createHousing);

// Update a housing listing
router.put("/:id", housingController.updateHousing);

// Delete a housing listing
router.delete("/:id", housingController.deleteHousing);

module.exports = router;
