const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");

//Getting all
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Getting one
router.get("/:id", getProfile, (req, res) => {
  res.json(res.profile);
});
//Creating one
router.post("/", async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Updating one
router.patch("/:id",getProfile , async (req, res) => {
  if (req.body.name != null) {
    res.profile.name = req.body.name;
  }
    if (req.body.address != null) {
        res.profile.address = req.body.address;
    }
    try{
        const updatedProfile = await res.profile.save()
        res.json(updatedProfile)
    }
    catch(err){
        res.status(400).json({message: err.message})
    
    }
});
//Deleting one
router.delete("/:id",getProfile,async (req, res) => {
    try{
        await res.profile.deleteOne()
        res.json({message: "Deleted Profile"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

async function getProfile(req, res, next) {
  let profile;
  try {
    profile = await Profile.findById(req.params.id);
    if (profile == null) {
      return res.status(404).json({ message: "Cannot find profile" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.profile = profile;
  next();
}

module.exports = router;
