
const UserData = require('../models/userData.model')
const router = require('express').Router()

router.route('/send').post()
router.route('/').get()




router.post(("/data"), async (req, res)=>{
    try{
      const newData = new UserData(req.body);
      newData.save().then(user => res.json(user)).catch(err => res.status(400).json("Error! " + err));

      console.log("Data sent")
    }catch(e) {
        return res.json("Error: "+ e.message);
    }
});


module.exports = router
