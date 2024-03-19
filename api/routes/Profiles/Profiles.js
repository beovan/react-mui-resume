const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");

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
  phoneNumber: req.body.phoneNumber,
  avatar: req.body.avatar,
  skills: req.body.skills,
  education: req.body.education,
  experience: req.body.experience,
});

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Updating one
router.patch("/:id", getProfile, async (req, res) => {
  if(req.body.avatar != null){
    res.profile.avatar = req.body.avatar;
  }
  if(req.body.phoneNumber != null){
    res.profile.phoneNumber = req.body.phoneNumber;
  }
  if (req.body.name != null) {
    res.profile.name = req.body.name;
  }
  if (req.body.address != null) {
    res.profile.address = req.body.address;
  }
  if (req.body.skills != null) {
    res.profile.skills = req.body.skills;
  }
  if (req.body.education != null) {
    res.profile.education = req.body.education;
  }
  if (req.body.experience != null) {
    res.profile.experience = req.body.experience;
  }
  try {
    const updatedProfile = await res.profile.save();
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
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