// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const responseMessages = require("../utils/responseMessages");

const AdminUserSchema = new mongoose.Schema({
  profileImage: { type: String, allowNullEmpty: true },
  employeeNumber: { type: Number, allowNullEmpty: true,default:0 },
  firstName: { type: String, allowNullEmpty: false },
  middleName: { type: String, allowNullEmpty: false },
  lastName: { type: String, allowNullEmpty: false },
  email: {
    type: String,
    required: true,
    unique: true,
    allowNullEmpty: false,
    validate: {
      validator: function (v) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  gender: { type: String, allowNullEmpty: true },
  contact: {
    type: Number,
    allowNullEmpty: false,
  },
  dob: {
    type: Date, allowNullEmpty: true,
  },
  bloodGroup: {
    type: String, allowNullEmpty: true,
  },
  permanentAddress: {
    type: String, allowNullEmpty: true,
  },
  currentAddress: {
    type: String, allowNullEmpty: true,
  },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'RoleMaster', allowNullEmpty: false },

  pwd: { type: String, allowNullEmpty: true },
  isPasswordUpdated: {
    type: Boolean,
    default: false, allowNullEmpty: true,
  },
  status: {
    type: Number,
    enum: [1, 2], // 1 for active, 2 for inactive
    default: 1, allowNullEmpty: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    allowNullEmpty: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, allowNullEmpty: true,ref: 'AdminUser' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, allowNullEmpty: true ,ref: 'AdminUser' },
  createdAt: { type: Date, default: Date.now, allowNullEmpty: true },
  updatedAt: { type: Date, allowNullEmpty: true },
});

AdminUserSchema.pre("save", async function (next) {
  if (!this.isModified("pwd")) {
    return next();
  }
  this.pwd = await bcrypt.hash(this.pwd, 10);
  next();
});

AdminUserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.pwd);
};


AdminUserSchema.statics.createNew = async function (data) {
  try {
    const newdata = new this(data);
    await newdata.save();
    return newdata;
  } catch (err) {
    throw new Error(err.message);
  }

};

AdminUserSchema.statics.getAll = async function (options = {}) {
  try {
    const { limit, skip = 0, sort = { createdAt: -1 }, query = {} } = options;

    const user = this.find(query, "-pwd -__v -createdAt -updatedAt -createdBy -updatedBy").sort(sort).skip(skip).limit(limit);
    return await user
  } catch (err) {
    throw new Error(err.message);
  }
};

//get data without Pagination
AdminUserSchema.statics.getData = async function (options) {
  try {
    const { sort = { createdat: -1 }, query = {} } = options;

    return await this.find(query, "-__v -pwd -createdAt -updatedAt -isDeleted -status -createdBy -updatedBy").sort(sort);
  } catch (err) {
    throw new Error(err.message);
  }
};

AdminUserSchema.statics.getById = async function (id) {
  try {
    const result = await this.findById(id).select("-pwd -__v -createdAt -updatedAt -createdBy -updatedBy ");;
    if (!result) {
      throw new Error(responseMessages.NotFound.message);
    }
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

AdminUserSchema.statics.findOneData = async function (query) {
  try {

    return await this.findOne(query).select("-__v -pwd -createdAt -isDeleted -status -updatedAt -createdBy -updatedBy");
  } catch (err) {
    throw new Error(err.message);
  }
};

AdminUserSchema.statics.updateById = async function (id, data) {
  try {
    const result = await this.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true });
    if (!result) {
      throw new Error(responseMessages.NotFound.message);
    }
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};



AdminUserSchema.statics.ActiveDeActive = async function (id, isDeleted) {
  try {
    const result = await this.findById(id);

    if (!result) {
      throw new Error(responseMessages.NotFound.message);
    }

    // Set the isDeleted field based on the passed value
    result.isDeleted = isDeleted;
    result.updatedAt = new Date();

    await result.save();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = mongoose.model("AdminUser", AdminUserSchema, "AdminUser");
