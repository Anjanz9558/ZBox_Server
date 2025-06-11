const customerAuthRoutes = require("./frontend/customerAuthRoutes");



module.exports = [
  { path: "/", handler: customerAuthRoutes },
];
