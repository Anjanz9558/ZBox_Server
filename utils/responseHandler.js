 
const responseMessages = require("../utils/responseMessages");

// exports.successResponse = (res, messageKey, data = {}) => {
//   const messageConfig = responseMessages[messageKey];
//   if (!messageConfig) {
//     return res
//       .status(500)
//       .json({ meta: { code: 1001, message: "Undefined response message" } });
//   }
//   return res
//     .status(200)
//     .json({
//       meta: { code: messageConfig.code, message: messageConfig.message}, data,
//     });
// };

exports.successResponse = (res, messageKey, data = null) => {
  const messageConfig = responseMessages[messageKey];
  if (!messageConfig) {
    return res
      .status(500)
      .json({ meta: { code: 1001, message: "Undefined response message" } });
  }

  // Construct the response object
  const response = {
    meta: { code: messageConfig.code, message: messageConfig.message },
  };

  // Add the data field only if data is not null or undefined
  if (data !== null && data !== undefined) {
    response.data = data;
  }

  return res.status(200).json(response);
};

exports.errorResponse = (res, messageKey, errorDetails = {}) => {
  const messageConfig = responseMessages[messageKey];
  if (!messageConfig) {
    return res
      .status(500)
      .json({ meta: { code: 1001, message: "Undefined response message" } });
  }

  // Construct the response object
  const response = {
    meta: {
      code: messageConfig.code,
      message: messageConfig.message,
    },
  };

  // Add errorDetails only if it's not an empty object
  if (Object.keys(errorDetails).length > 0) {
    response.meta.errorDetails = errorDetails;
  }

  return res.status(400).json(response);
};