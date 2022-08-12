// Iteration #1
const {Schema, model} = require('mongoose');
const droneSchema = new Schema(
    {
      name: { type: String, required: true },
      propellers: { type: Number },
      maxSpeed: { type: Number }
    },
    { timestamps: true }
  );
  const DroneModel = model("drone", droneSchema);
  module.exports = DroneModel

