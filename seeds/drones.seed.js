// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const { default: mongoose } = require("mongoose");
const DroneModel = require("../models/Drone.model")
require("../db")

DroneModel.insertMany(drones)
.then((allDrones) => {
 console.log("amount of drones",allDrones.length)
 mongoose.connection.close()
})
.catch((err)=> {
    console.log(err)
})
//how to close the conection