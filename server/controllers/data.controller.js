const haversineDistance = require('../haversine');


const UserData = require('../models/userData.model')
const router = require('express').Router()

router.route('/send').post()
router.route('/').get()




router.post(("/data"), async (req, res)=>{
    try{
      const _id = "65295cc65376bbb8c1d428fe"
      const user = UserData.findOne({_id});

      user.lastKnowLocation = req.body.location;
      const distance = await haversineDistance(lastKnowLocation[0], lastKnowLocation[1], req.body.location[0], req.body.location[1])
      //51.437233, 5.446286 long lat of limit west
      //51.439345, 5.507008 long lat of limit east
      //51.454211, 5.476489 long lat of limit north
      //51.420886, 5.481924 long lat of limit south
      //51.439475, 5.477845 long lat of center
      if(req.body.location[0] > 51.454211 || req.body.location[0] < 51.420886 ||
        req.body.location[1] > 5.507008 || req.body.location[1] < 5.446286) {
          user.distanceNDrivenPol = user.distanceDrivenNPol + distance
      }
      if(req.body.location[0] < 51.454211 || req.body.location[0] > 51.420886 ||
        req.body.location[1] < 5.507008 || req.body.location[1] > 5.446286) {
          user.distanceDrivenPol = user.distanceDrivenPol + distance
      }
      user.save().then(user => res.json(user)).catch(err => res.status(400).json("Error! " + err));

      console.log("Data sent")
    }catch(e) {
        return res.json("Error: "+ e.message);
    }
});

router.post(("/startSession"), (req, res) => {
  try{
    const _id = "65295cc65376bbb8c1d428fe"
    const user = UserData.findOne({_id});
    user.lastKnowLocation = req.body.location;
    user.save().then(user => res.json(user)).catch(err => res.status(400).json("Error! " + err));
  }catch (e) {
    return res.json("Error: "+ e.message);
  }
});


module.exports = router
