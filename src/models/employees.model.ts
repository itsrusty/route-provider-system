import mongoose from "mongoose";

const employeesModel = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  lastnames: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  salesProducts: {
    type: Number,
  },

  productPrice: {
    type: Number,
  },
  recorder: [
    {
      action: {
        type: String,
        required: true,
      },
      date:{
        type: Date,
        required: true,
      },
    },
  ],
});

const employeeModel = mongoose.model("employees", employeesModel);

export default employeeModel;
