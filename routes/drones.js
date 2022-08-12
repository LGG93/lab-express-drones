const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
    DroneModel.find()
      .then((allDrones) =>{
        // console.log(allDrones)
        res.render("drones/list", { allDrones })
})
      .catch((error) => `Error while finding all drones: ${error}`);
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    //console.log(req.body)
  
    DroneModel.create(req.body)
      .then(() =>{res.redirect("/drones")})
      .catch((error) => {
        res.render("/drones")
        console.log(`Error while creating a new book: ${error}`)});
});

router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id
  DroneModel.findById(droneId)
  .then((foundDrone)=> {
    res.render("drones/update-form", foundDrone)
  })
  .catch((error) =>{
    console.log(`Error while updating a Drone: ${error}`)
})
}); 
   
    
router.post('/drones/:id/edit', (req, res, next) => {
    // const { id } = req.params;  //Different way to set up droneID
    const {name, propellers, maxSpeed} = req.body;
    const droneId = req.params.id
    DroneModel.findByIdAndUpdate(
      droneId,
     { name, propellers, maxSpeed },
     { new: true }    
    )
      .then((updatedDrone) =>{res.redirect("/drones")})
      .catch((error) =>
        console.log(`Error while updating a Drone: ${error}`)
    );
}); 



router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
DroneModel.findByIdAndDelete(id)
  .then(() => res.redirect("/drones"))
  .catch((error) => console.log(`Error while deleting a book: ${error}`));
});

module.exports = router;
