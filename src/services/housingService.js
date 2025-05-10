const { v4: uuidv4 } = require("uuid");
const housings = require("../data/housingData");

// Get all housing listings with optional filtering
exports.getAllHousings = (filters = {}) => {
  let result = [...housings];

  // Apply filters if any
  if (filters.bedrooms) {
    result = result.filter((h) => h.bedrooms == filters.bedrooms);
  }

  if (filters.bathrooms) {
    result = result.filter((h) => h.bathrooms == filters.bathrooms);
  }

  if (filters.propertyType) {
    result = result.filter((h) => h.propertyType === filters.propertyType);
  }

  if (filters.minPrice) {
    result = result.filter((h) => h.price >= filters.minPrice);
  }

  if (filters.maxPrice) {
    result = result.filter((h) => h.price <= filters.maxPrice);
  }

  return result;
};

// Get a single housing listing by ID

exports.getHousingById = (id) => {
  return housings.find((h) => h.id === id);
};

// Get housing by city
exports.getHousingByCity = (cityName) => {
  return housings.filter(
    (h) => h.address.city.toLowerCase() === cityName.toLowerCase()
  );
};

// Get housing by price range
exports.getHousingByPriceRange = (min, max) => {
  return housings.filter((h) => h.price >= min && h.price <= max);
};

// Create a new housing listing

exports.createHousing = async (req, res, next) => {
  try {
    const housing = await housingService.createHousing(req.body);
    res.status(201).json({ success: true, data: housing });
  } catch (error) {
    logger.error(`Error creating housing: ${error.message}`);
    next(error);
  }
};

// Update a housing listing

exports.updateHousing = async (req, res, next) => {
  try {
    const housing = await housingService.updateHousing(req.params.id, req.body);
    if (!housing) {
      return res
        .status(404)
        .json({ success: false, message: "Housing not found" });
    }
    res.status(200).json({ success: true, data: housing });
  } catch (error) {
    logger.error(`Error updating housing: ${error.message}`);
    next(error);
  }
};

// Delete a housing listing

exports.deleteHousing = async (req, res, next) => {
  try {
    const housing = await housingService.deleteHousing(req.params.id);
    if (!housing) {
      return res
        .status(404)
        .json({ success: false, message: "Housing not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    logger.error(`Error deleting housing: ${error.message}`);
    next(error);
  }
};
