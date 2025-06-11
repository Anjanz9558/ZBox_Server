// models/Customer.js      
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const responseMessages = require("../utils/responseMessages");

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,allowNullEmpty: false,
        validate: {
          validator: function (v) {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              v
            );
          },
          message: (props) => `${props.value} is not a valid email!`,
        },
      },
    pwd: {type: String,allowNullEmpty: true},
    firstName: {type: String,allowNullEmpty: true},
    lastName: {type: String,allowNullEmpty: true},
    gender: {type: String,allowNullEmpty: true},
    dob: { type: Date,allowNullEmpty: true},  //if overRideDefaultTaxDisplayType:true
    companyName: {type: String,allowNullEmpty: true},
    // isTaxExempt: {type: Boolean,allowNullEmpty: true},
    // // customerRoleId: [{ type: mongoose.Schema.Types.ObjectId, ref: "CustomerRole",allowNullEmpty: false}],
    // active: {type: String,allowNullEmpty: true},
    // adminComment: {type: String,allowNullEmpty: true},
    // ipAddress: {type: String,allowNullEmpty: true},
    // lastActivity:{ type: Date, default: Date.now ,allowNullEmpty: true },
    contact: {type: Number,allowNullEmpty: true},
    status: {
        type: Number,
        default: 1,allowNullEmpty: true,
        enum: [1, 2], // Valid enum values
    },
    isDeleted: {
        type: Boolean,
        default: false,
        allowNullEmpty: true
    },
    createdAt: { type: Date, default: Date.now,allowNullEmpty: true },
    updatedAt: { type: Date,allowNullEmpty: true },
});

customerSchema.pre("save", async function (next) {
  if (!this.isModified("pwd")) {
    return next();
  }
  this.pwd = await bcrypt.hash(this.pwd, 10);
  next();
});

customerSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.pwd);
};

customerSchema.statics.createNew = async function (data) {
    try {
        const newdata = new this(data);
        await newdata.save();

        const result = await this.findById(newdata._id).select(
          "-__v -createdAt -isDeleted -status -updatedAt -pwd"
        );
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get all roles with options for pagination and sorting
customerSchema.statics.getAll = async function (options = {}) {
    try {
        const { limit, skip = 0, sort = { createdAt: -1 }, query = {} } = options;

        // Use the query to filter records
        return await this.find(query, "-__v -createdAt -updatedAt -pwd").sort(sort).skip(skip).limit(limit);
    } catch (err) {
        throw new Error(err.message);
    }
};

//get data without Pagination
customerSchema.statics.getData = async function (options) {
    try {
      const { sort = { createdAt: -1 }, query = {} } = options;
  
      return await this.find(query, "-__v -createdAt -updatedAt").sort(sort);
    } catch (err) {
      throw new Error(err.message);
    }
  };

customerSchema.statics.getById = async function (id) {
    try {
        const result = await this.findById(id).select('-__v -createdAt -updatedAt -pwd');

        if (!result) {
            throw new Error(responseMessages.NotFound.message);
        }

        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};


customerSchema.statics.updateById = async function (id, data) {
    try {
        const updated = await this.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true });

        if (!updated) {
            throw new Error(responseMessages.NotFound.message);
        }

        const result = await this.findById(updated._id).select(
          "-__v -createdAt -isDeleted -status -updatedAt -pwd"
        );  

        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

customerSchema.statics.ActiveDeActiveMultiple = async function (ids, isDeleted) {
    try {
        const result = await this.updateMany(
            { _id: { $in: ids } },
            { $set: { isDeleted: isDeleted, updatedAt: new Date() } }
        );
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

//this static function use for the find a single data with field
customerSchema.statics.findOneData = async function (options) {
    try {
      const { query = {} } = options;
  
      return await this.findOne(query, "-__v -createdAt -isDeleted -status -updatedAt -createdBy -updatedBy");
    } catch (err) {
      throw new Error(err.message);
    }
  };

module.exports = mongoose.model("Customer", customerSchema, "customer");