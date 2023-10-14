const haversineDistance = require('../haversine');


const UserData = require('../models/userData.model')
const router = require('express').Router()

router.route('/send').post()
router.route('/').get()




router.post(("/data"), async (req, res)=>{
    try{
      const _id = "65295cc65376bbb8c1d428fe"
      const user = await UserData.findOne({_id});

      const distance = await haversineDistance(user.lastKnownLocationLat, user.lastKnownLocationLong, req.body.locationLAT, req.body.locationLONG)
      user.lastKnownLocationLat = req.body.locationLAT;
      user.lastKnownLocationLong = req.body.locationLONG;
      //51.437233, 5.446286 long lat of limit west
      //51.439345, 5.507008 long lat of limit east
      //51.454211, 5.476489 long lat of limit north
      //51.420886, 5.481924 long lat of limit south
      //51.439475, 5.477845 long lat of center
      console.log(distance);
      if(req.body.locationLAT > 51.454211 || req.body.locationLAT < 51.420886 ||
        req.body.locationLONG > 5.507008 || req.body.locationLONG < 5.446286) {
          user.distanceDrivenNPol = user.distanceDrivenNPol + distance
      }else {
          user.distanceDrivenPol = user.distanceDrivenPol + distance
      }
      user.save().then(user => res.json(user)).catch(err => res.status(400).json("Error! " + err));

      console.log("Data sent")
    }catch(e) {
        return res.json("Error: "+ e.message);
    }
});

router.post(("/startSession"), async (req, res) => {
  try{
    const _id = "65295cc65376bbb8c1d428fe"
    const user = await UserData.findOne({_id}); 
    user.lastKnownLocationLat = req.body.locationLAT;
    user.lastKnownLocationLong = req.body.locationLONG;
    user.save().then(user => res.json(user)).catch(err => res.status(400).json("Error! " + err));
  }catch (e) {
    return res.json("Error: "+ e.message);
  }
});

router.get(("/info"), async (req,res) => {
  try{
    const _id = "65295cc65376bbb8c1d428fe"
    const user = await UserData.findOne({_id}); 
    return res.json(user);
  }catch (e) {
    return res.send(e);
  }
})


module.exports = router
