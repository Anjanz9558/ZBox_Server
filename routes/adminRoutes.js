const authRoutes = require("./admin/authRoutes");


module.exports = [
  { path: "/", handler: authRoutes },
];
