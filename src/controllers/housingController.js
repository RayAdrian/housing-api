const housingService = require("../services/housingService");
const logger = require("../utils/logger");

// Get all housing listings
exports.getAllHousings = (req, res, next) => {
  try {
    // Extract query parameters
    const { bedrooms, bathrooms, propertyType, minPrice, maxPrice } = req.query;

    // Build filter object
    const filters = {};
    if (bedrooms) filters.bedrooms = parseInt(bedrooms);
    if (bathrooms) filters.bathrooms = parseFloat(bathrooms);
    if (propertyType) filters.propertyType = propertyType;
    if (minPrice) filters.minPrice = parseFloat(minPrice);
    if (maxPrice) filters.maxPrice = parseFloat(maxPrice);

    const housings = housingService.getAllHousings(filters);
    res.status(200).json({
      success: true,
      count: housings.length,
      data: housings,
    });
  } catch (error) {
    logger.error(`Error getting all housings: ${error.message}`);
    next(error);
  }
};

// Get a single housing listing by ID
exports.getHousingById = (req, res, next) => {
  try {
    const housing = housingService.getHousingById(req.params.id);

    if (!housing) {
      return res.status(404).json({
        success: false,
        message: "Housing not found",
      });
    }
    res.status(200).json({
      success: true,
      data: housing,
    });
  } catch (error) {
    logger.error(`Error getting housing by ID: ${error.message}`);
    next(error);
  }
};

// Get housing by city
exports.getHousingByCity = (req, res, next) => {
  try {
    const { cityName } = req.params;

    if (!cityName) {
      return res.status(400).json({
        success: false,
        message: "Please provide a city name",
      });
    }

    const housings = housingService.getHousingByCity(cityName);

    res.status(200).json({
      success: true,
      count: housings.length,
      data: housings,
    });
  } catch (error) {
    logger.error(`Error getting housing by city: ${error.message}`);
    next(error);
  }
};

// Get housing by price range
exports.getHousingByPriceRange = (req, res, next) => {
  try {
    const { min, max } = req.query;

    if (!min || !max) {
      return res.status(400).json({
        success: false,
        message: "Please provide both min and max price parameters",
      });
    }

    const housings = housingService.getHousingByPriceRange(
      parseFloat(min),
      parseFloat(max)
    );

    res.status(200).json({
      success: true,
      count: housings.length,
      data: housings,
    });
  } catch (error) {
    logger.error(`Error getting housing by price range: ${error.message}`);
    next(error);
  }
};

// Create a new housing listing
exports.createHousing = (req, res, next) => {
  try {
    // Basic validation
    const { title, description, price, bedrooms, bathrooms, address } =
      req.body;

    if (
      !title ||
      !description ||
      !price ||
      bedrooms === undefined ||
      bathrooms === undefined ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const housing = housingService.createHousing(req.body);
    res.status(201).json({
      success: true,
      data: housing,
    });
  } catch (error) {
    logger.error(`Error creating housing: ${error.message}`);
    next(error);
  }
};

// Update a housing listing
exports.updateHousing = (req, res, next) => {
  try {
    const housing = housingService.updateHousing(req.params.id, req.body);
    if (!housing) {
      return res.status(404).json({
        success: false,
        message: "Housing not found",
      });
    }

    res.status(200).json({
      success: true,
      data: housing,
    });
  } catch (error) {
    logger.error(`Error updating housing: ${error.message}`);
    next(error);
  }
};

// Delete a housing listing
exports.deleteHousing = (req, res, next) => {
  try {
    const housing = housingService.deleteHousing(req.params.id);
    if (!housing) {
      return res.status(404).json({
        success: false,
        message: "Housing not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: "Housing deleted successfully",
    });
  } catch (error) {
    logger.error(`Error deleting housing: ${error.message}`);
    next(error);
  }
};
