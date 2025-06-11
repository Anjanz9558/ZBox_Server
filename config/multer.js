const multer = require('multer');
const path = require('path');

// Define storage location and filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'Image') {
            cb(null, 'uploads/Images');
        }      
        else{
            cb(null, 'uploads/'); // Set the directory where files will be uploaded
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Store the original file name without adding timestamp
    }
});

// Set up multer instance
const upload = multer({
    storage: storage,
    limits: { fileSize: 15 * 1024 * 1024 }, // Set file size limit (15 MB in this case)
    // limits: { fileSize: Infinity }, // No file size limit
    fileFilter: function (req, file, cb) {
        // Remove file type restrictions (allow any file)
        cb(null, true); // Accept all files
    }
});

module.exports = upload;
