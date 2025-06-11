const AdminUser = require("../../models/AdminUser");
const { generateToken } = require("../../utils/jwt");
const responseHandler = require("../../utils/responseHandler");

exports.register = async (req, res) => {
    try {
        const { name, email, pwd, roleId } = req.body;

        // Create and save the user
        const user = new AdminUser({ name, email, pwd, roleId });
        await user.save();

        // Generate a token
        const token = generateToken(user);

        // Remove sensitive fields before sending response
        const sanitizedUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            roleId: user.roleId,
        };

        responseHandler.successResponse(res, "UserRegistrationSuccess", {
            user: sanitizedUser,
            token,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return responseHandler.errorResponse(res, "InvalidEmail", error.message);
        }
        if (error.code === 11000) {
            return responseHandler.errorResponse(res, "EmailAlreadyExist");
        }
        responseHandler.errorResponse(res, "InternalServerError", error.message);
    }
};


exports.login = async (req, res) => {
    try {
        const { email, pwd } = req.body;

        // Find the user
        const user = await AdminUser.findOne({ email });
        if (!user || !(await user.comparePassword(pwd))) {
            return responseHandler.errorResponse(res, "InvalidCredential");
        }

        // Generate a token
        const token = generateToken(user);

        // Remove sensitive fields before sending response
        const sanitizedUser = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            roleId: user.roleId,
        };

        responseHandler.successResponse(res, "LoginSuccess", { user: sanitizedUser, token });
    } catch (error) {
        responseHandler.errorResponse(res, "InternalServerError", error.message);
    }
};
