const Customer = require("../../models/Customer");
const { generateCustomerToken } = require("../../utils/jwt");
const responseHandler = require("../../utils/responseHandler");
const {sendOTPEmail} = require('../../utils/mailer');
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { firstName, lastName,contact, gender, dob, companyName, email, pwd, confirmpwd } = req.body;

        // Check if password and confirm password match
        if (pwd !== confirmpwd) {
            return responseHandler.errorResponse(res, "PasswordMismatch");
        }

        const existingUser = await Customer.findOne({ email });
        if (existingUser) {
            return responseHandler.errorResponse(res, "EmailAlreadyExist");
        }
 
        // const registeredRole = await CustomerRole.findOne({ customerRoleName: "Registered" });
        // if (!registeredRole) {
        //     return responseHandler.errorResponse(res, "RoleNotFound");
        // }

        // Create and save the user
        const user = new Customer({
            firstName,
            lastName,
            gender,
            dob,
            contact,
            companyName,
            email,
            pwd
        });
        await user.save();


        // Generate a token
        const token = generateCustomerToken(user);

        // Remove sensitive fields before sending response
        const sanitizedUser = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // customerRoleId: user.customerRoleId,
        };

        // Send success response
        responseHandler.successResponse(res, "UserRegistrationSuccess", {
            user: sanitizedUser,
            token,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return responseHandler.errorResponse(res, "InvalidEmail", error.message);
        }
        responseHandler.errorResponse(res, "InternalServerError", error.message);
    }
};



exports.login = async (req, res) => {
    try {
        const { email, pwd } = req.body;

        // Find the user by email
        const user = await Customer.findOne({ email });
        if (!user || !(await user.comparePassword(pwd))) {
            return responseHandler.errorResponse(res, "InvalidCredential");
        }

        // Generate a token
        const token = generateCustomerToken(user);

        // Sanitize user data before sending
        const sanitizedUser = {
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            // customerRoleId: user.customerRoleId,
        };

        responseHandler.successResponse(res, "LoginSuccess", { user: sanitizedUser, token });
    } catch (error) {
        responseHandler.errorResponse(res, "InternalServerError", error.message);
    }
};



