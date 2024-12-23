const User = require("../models/user2"); //! User Model Object
const getUserDetails = async (req, res) => {
  try {
    console.log("inside");
    const user = await User.findById(req.params.userId).select("-password"); // Exclude sensitive fields
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { changedFields, userId } = req.body;
    if (!changedFields || !userId) {
      return res.status(400).json({ error: "Invalid request data" });
    }
    const updateFields = {};
    for (const key in changedFields) {
      if (key === "email" || key === "career") {
        updateFields[key] = changedFields[key];
      } else {
        updateFields[`profile.${key}`] = changedFields[key];
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUserAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("firstName lastName email");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const rateUser = async (req, res) => {
  const { userId, targetUserId, rating, review } = req.body;
  // targetUserId : the user who receiving the rating
  try {
    if (!userId || !targetUserId) {
      return res.status(400).json({ message: 'Both userId and targetUserId are required.' });
    }
    if (rating === undefined || typeof rating !== 'number') {
      return res.status(400).json({ message: 'Invalid rating value. It must be a number.' });
    }
    const user = await User.findById(targetUserId);
    if (!user) {
      return res.status(404).json({ message: 'Target user not found.' });
    }
    const newRating = {
      ratings: rating,
      review: review || '', 
      userId, 
    };

    user.profile.ratings.push(newRating);
    await user.save(); 

    res.status(200).json({ message: 'Rating added successfully.', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding rating.', error: error.message });
  }
};




module.exports = {
  getUserDetails,
  updateUserProfile,
  deleteUserAccount,
  getAllUsers,
  rateUser,
};
