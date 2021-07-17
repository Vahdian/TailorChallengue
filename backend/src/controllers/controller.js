const Restaurants = require("../models/Restaurants")


async function getRestaurants(req, res, next){
    try{
    const allData = await Restaurants.find()
    res.send(allData)
    console.info(allData)
    console.info(res)
    next()
    }
    catch{
        console.info("Couldnt retrieve data")
    }
}

async function getOneRestaurant(req, res, next){
  const id = req.params.id;
  try{
  const restaurantRequired = await Restaurants.findById(id)
  res.send(restaurantRequired)
  console.info(restaurantRequired)
  next()
  }
  catch{
      console.info("no va")
  }
}

async function createRestaurant(req, res, next){
    try {
        const newRestaurant = new Restaurants();
            newRestaurant.id = req.body.id;
            newRestaurant.name = req.body.name;
            newRestaurant.neighborhood = req.body.neighborhood;
            newRestaurant.photograph = req.body.photograph;
            newRestaurant.address = req.body.address;
            newRestaurant.latlng.lat = req.body.latlng.lat;
            newRestaurant.latlng.lng = req.body.latlng.lng;
            newRestaurant.image = req.body.image;
            newRestaurant.cuisine_type = req.body.cuisine_type;
            newRestaurant.operating_hours.Monday = req.body.operating_hours.Monday;
            newRestaurant.operating_hours.Tuesday = req.body.operating_hours.Tuesday;
            newRestaurant.operating_hours.Wednesday = req.body.operating_hours.Wednesday;
            newRestaurant.operating_hours.Thursday = req.body.operating_hours.Thursday;
            newRestaurant.operating_hours.Friday = req.body.operating_hours.Friday;
            newRestaurant.operating_hours.Saturday = req.body.operating_hours.Saturday;
            newRestaurant.operating_hours.Sunday = req.body.operating_hours.Sunday;
            for(i=0; req.body.reviews.length > i; i++){
                newRestaurant.reviews.push({
                    'name':req.body.reviews[i].name, 
                    'date':req.body.reviews[i].date,
                    'rating':req.body.reviews[i].rating,
                    'comments':req.body.reviews[i].comments
                }) 
        }
        const savedRestaurant = await newRestaurant.save();
        res.send({ Restaurants: savedRestaurant._id });
        console.log("New restaurant saved correctly");
      } catch (err) {
        console.error(err);
        res.send("Error saving the new restaurant in the database");
      }
}

async function deleteRestaurant(req, res, next) {
    const id = req.params.id;
    await Restaurants.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete the restaurant with id=${id}.`,
          });
        } else {
          res.send({
            message: "Restaurant was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete restaurant with id=" + id,
        });
      });
  }

  async function updateRestaurant(req, res, next) {
    const id = req.params.id;
    Restaurants.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update restaurant data with id=${id}.`,
          });
        } else res.send({ message: "Restaurant data was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating restaurant data entry with id=" + id,
        });
      });
  }

module.exports = { getRestaurants, createRestaurant, deleteRestaurant, updateRestaurant, getOneRestaurant}