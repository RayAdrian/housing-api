// Initial housing data array
const housings = [
  {
    id: "1",
    title: "Modern Downtown Apartment",

    description:
      "Beautiful modern apartment in the heart of downtown with city views.",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA",
    },
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    propertyType: "Apartment",
    yearBuilt: 2015,
    photos: [
      "https://example.com/apartment1.jpg",
      "https://example.com/apartment1-2.jpg",
    ],
    amenities: ["Gym", "Pool", "Parking", "Elevator"],
    available: true,
    listingDate: "2023-05-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Cozy Suburban House",

    description:
      "Spacious family home in a quiet suburban neighborhood with a large backyard.",
    address: {
      street: "456 Oak Ave",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      country: "USA",
    },
    price: 3200,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    propertyType: "House",
    yearBuilt: 2005,
    photos: [
      "https://example.com/house1.jpg",
      "https://example.com/house1-2.jpg",
    ],
    amenities: ["Backyard", "Garage", "Fireplace", "Central AC"],
    available: true,
    listingDate: "2023-05-05T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Luxury Condo with Ocean View",

    description:
      "High-end condo with panoramic ocean views and premium finishes.",
    address: {
      street: "789 Beach Blvd",
      city: "Miami",
      state: "FL",
      zipCode: "33139",
      country: "USA",
    },
    price: 4500,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    propertyType: "Condo",
    yearBuilt: 2020,
    photos: [
      "https://example.com/condo1.jpg",
      "https://example.com/condo1-2.jpg",
    ],
    amenities: ["Beach Access", "Pool", "Gym", "24/7 Security", "Balcony"],
    available: true,
    listingDate: "2023-05-10T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Charming Studio in Historic District",

    description:
      "Cozy studio apartment in a historic building with character and charm.",
    address: {
      street: "101 Brick Lane",
      city: "Boston",
      state: "MA",
      zipCode: "02110",
      country: "USA",
    },
    price: 1800,
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    propertyType: "Apartment",
    yearBuilt: 1920,
    photos: ["https://example.com/studio1.jpg"],
    amenities: ["Hardwood Floors", "High Ceilings", "Laundry"],
    available: true,
    listingDate: "2023-05-15T00:00:00.000Z",
  },
  {
    id: "5",
    title: "Spacious Townhouse Near Park",

    description:
      "Modern townhouse with open floor plan, located near city parks and shopping.",
    address: {
      street: "222 Park Ave",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    price: 3000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1600,
    propertyType: "Townhouse",
    yearBuilt: 2010,
    photos: [
      "https://example.com/townhouse1.jpg",
      "https://example.com/townhouse1-2.jpg",
    ],
    amenities: ["Rooftop Deck", "Garage", "Fireplace", "Smart Home Features"],
    available: true,

    listingDate: "2023-05-20T00:00:00.000Z",
  },
];

module.exports = housings;
