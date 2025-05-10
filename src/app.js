const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// Import routes
const housingRoutes = require("./routes/housingRoutes");

// Import middleware
const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter");

// Initialize express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
// Configure CORS to allow requests from any origin
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(morgan("dev")); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(rateLimiter); // Rate limiting

// Routes
app.use("/api/housing", housingRoutes);

// Base route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Housing API",
    endpoints: {
      getAllHousings: {
        method: "GET",
        url: "/api/housing",
        description: "Get all housing listings with optional filtering",
        queryParams: {
          bedrooms: "Filter by number of bedrooms",
          bathrooms: "Filter by number of bathrooms",
          propertyType: "Filter by property type",
          minPrice: "Filter by minimum price",

          maxPrice: "Filter by maximum price",
        },
      },
      getHousingById: {
        method: "GET",
        url: "/api/housing/:id",
        description: "Get a single housing listing by ID",
        params: {
          id: "Housing listing ID",
        },
      },
      getHousingByCity: {
        method: "GET",
        url: "/api/housing/city/:cityName",
        description: "Get housing listings by city name",
        params: {
          cityName: "Name of the city",
        },
      },
      getHousingByPriceRange: {
        method: "GET",
        url: "/api/housing/price-range",
        description: "Get housing listings within a price range",
        queryParams: {
          min: "Minimum price",

          max: "Maximum price",
        },
      },
      createHousing: {
        method: "POST",
        url: "/api/housing",
        description: "Create a new housing listing",
        requestBody: {
          title: "String (required) - Title of the listing",
          description: "String (required) - Description of the property",
          address: {
            street: "String - Street address",
            city: "String (required) - City name",
            state: "String (required) - State code",
            zipCode: "String - ZIP code",
            country: "String (required) - Country name",
          },
          price: "Number (required) - Monthly rent price",
          bedrooms: "Number (required) - Number of bedrooms",
          bathrooms: "Number (required) - Number of bathrooms",
          squareFeet: "Number - Square footage of the property",

          propertyType:
            "String - Type of property (Apartment, House, Condo, etc.)",
          yearBuilt: "Number - Year the property was built",
          photos: "Array of Strings - URLs to property photos",
          amenities: "Array of Strings - List of amenities",

          available: "Boolean - Availability status",
        },
      },
      updateHousing: {
        method: "PUT",
        url: "/api/housing/:id",
        description: "Update an existing housing listing",
        params: {
          id: "Housing listing ID",
        },
        requestBody: {
          title: "String - Title of the listing",
          description: "String - Description of the property",
          address: {
            street: "String - Street address",
            city: "String - City name",
            state: "String - State code",
            zipCode: "String - ZIP code",
            country: "String - Country name",
          },
          price: "Number - Monthly rent price",
          bedrooms: "Number - Number of bedrooms",
          bathrooms: "Number - Number of bathrooms",
          squareFeet: "Number - Square footage of the property",
          propertyType: "String - Type of property",
          yearBuilt: "Number - Year the property was built",
          photos: "Array of Strings - URLs to property photos",
          amenities: "Array of Strings - List of amenities",
          available: "Boolean - Availability status",
        },
        note: "Only include fields you want to update",
      },
      deleteHousing: {
        method: "DELETE",
        url: "/api/housing/:id",
        description: "Delete a housing listing",
        params: {
          id: "Housing listing ID",
        },
      },
    },
    version: "1.0.0",
  });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
