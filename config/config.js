 
require("dotenv").config();
const path = require('path');

module.exports = {
  mongodb: {
    uri: "mongodb+srv://AnjanDev:AnjanDev@anjandevclustersew.isilrgm.mongodb.net/ZBOX",       //Local database
    // uri: "mongodb+srv://chasemindinfo:Damini%40210@cluster0.ay6krc8.mongodb.net/SpectroDev",          //    Live database

  },
  EMAIL: {
    HOST: "mail.chasemind.in",
    PORT: 25,
    SECURE: false,
    USER: "admin@chasemind.in",
    PASS: "Chasemind@123",
  },
  AdminJwtSecret: "bnRox$@2014",
  FrontendJwtSecret: "bnRox$@2015",
  JWT_EXPIRES_IN: "30d",
  port: process.env.PORT || 5000,

  UPLOADS: {
    ROOT_PATH: path.join(__dirname, "/../.."),
    DEFAULT: path.join(__dirname, "../uploads/"),
    DIR_PATH_PHOTOS: path.join(__dirname, "../uploads/photos/"),
    DIR_PATH_VIDEOS: path.join(__dirname, "../uploads/videos/"),
    DIR_PATH_DOCUMENTS: path.join(__dirname, "../uploads/documents/"),
    DB_PATH_ICONS: "/uploads/",
    DB_PATH_PHOTOS: "/uploads/photos/",
    DB_PATH_VIDEOS: "/uploads/videos/",
    DB_PATH_DOCUMENTS: "/uploads/documents/",
  },
 Upload_Path:"http://192.168.1.16:5000/uploads"
};
