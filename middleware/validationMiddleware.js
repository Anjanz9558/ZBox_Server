// const mongoose = require("mongoose");
// const responseHandler = require("../utils/responseHandler");

// /**
//  * Middleware to validate and coerce request body fields dynamically based on a Mongoose model's schema.
//  * @param {Object} model - Mongoose model.
//  * @returns Middleware function.
//  */
// const validateDynamicSchema = (model) => {
//     return (req, res, next) => {
//         const schemaPaths = model.schema.paths;
//         const errors = [];

//         // Combine req.body and req.files if necessary
//         const formData = { ...req.body, ...req.files };

//         for (const [key, value] of Object.entries(schemaPaths)) {
//             if (key === "_id" || key === "__v") continue;

//             let fieldValue = formData[key];
//             const fieldOptions = value.options;

//             // Check required fields
//             if (fieldOptions.required && (fieldValue === undefined || fieldValue === null || fieldValue === "")) {
//                 errors.push(`${key} is required`);
//                 continue;
//             }

//             // Skip ObjectID and Date validation
//             if (value.instance === "ObjectID" || value.options.type === mongoose.Schema.Types.ObjectId || value.instance === "Date") {
//                 continue;
//             }

//             // Custom validation
//             if (fieldOptions.validate && fieldOptions.validate.validator) {
//                 const isValid = fieldOptions.validate.validator(formData[key]);
//                 if (!isValid) {
//                     errors.push(fieldOptions.validate.message || `${key} is invalid`);
//                 }
//             }
//         }

//         if (errors.length > 0) {
//             return responseHandler.errorResponse(res, "ValidationError", errors.join(", "));
//         }

//         next();
//     };
// };

// module.exports = validateDynamicSchema;
const mongoose = require("mongoose");
const responseHandler = require("../utils/responseHandler");
/**
 * Middleware to validate and coerce request body fields dynamically based on a Mongoose model's schema.
 * @param {Object} model - Mongoose model.
 * @returns Middleware function.
 */
const validateDynamicSchema = (model) => {
    return (req, res, next) => {
      const schemaPaths = model.schema.paths;
      const errors = [];
      const formData = { ...req.body };
  
      // Check for fields with allowNullEmpty: false
      for (const key in schemaPaths) {
        if (key === "_id" || key === "__v") continue;
  
        const schemaField = schemaPaths[key];
        const fieldOptions = schemaField.options;
  
        // Default to allowNullEmpty: true if not explicitly defined
        const allowNullEmpty = fieldOptions.allowNullEmpty ?? true;
  
        if (!allowNullEmpty) {
          // Check if the field is missing or empty
          if (
            formData[key] === undefined ||
            formData[key] === null ||
            formData[key] === ""
          ) {
            errors.push(`"${key}" is required and should not be empty.`);
          }
        }
      }
  
      if (errors.length > 0) {
        return responseHandler.errorResponse(res, "ValidationError", errors.join(", "));
      }
  
      next();
    };
  };
  
  
  

module.exports = validateDynamicSchema;