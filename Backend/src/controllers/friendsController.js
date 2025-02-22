const User = require("../models/user2"); //! User Model Object

const logInUsers = async (req, res) => {
  const loggedInUsers = req.params.userId;
  //* Get All users Except Me (My Account)
  User.find({ _id: { $ne: loggedInUsers } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ Error: error });
    });
};

const sendFiendRequestController = async (req, res) => {
  const { currentUserId, selectedUserId } = req.body;
  try {
    await User.findByIdAndUpdate(selectedUserId, {
      $push: {
        friendRequests: currentUserId,
      },
    });

    await User.findByIdAndUpdate(currentUserId, {
      $push: {
        sendRequests: selectedUserId,
      },
    });
    res.status(200).json({ message: "Friend Request Sent" });
  } catch (error) {
    res.send(500).json({ Error: error });
  }
};

const getFriendsRequest = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId)
      .populate("friendRequests", "profile email image city")
      .lean();
    const friendRequests = user.friendRequests;
    res.status(200).json(friendRequests);
  } catch (error) {
    console.log("error", error);
  }
};

const acceptFriendRequestController = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User(s) not found" });
    }

    if (
      sender.friends.includes(receiverId) &&
      receiver.friends.includes(senderId)
    ) {
      return res
        .status(200)
        .json({ message: "Friend Request Already Accepted" });
    }

    sender.sendRequests = sender.sendRequests.filter(
      (request) => request.toString() !== receiverId.toString()
    );
    receiver.friendRequests = receiver.friendRequests.filter(
      (request) => request.toString() !== senderId.toString()
    );

    sender.friends.push(receiverId);
    receiver.friends.push(senderId);

    await sender.save();
    await receiver.save();

    res.status(200).json({ message: "Friend Request Accepted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const acceptedFriendsController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId)
      .populate(
        "friends",
        "profile.firstName profile.lastName email profile.profileImage careerCategory"
      )
      .lean();
    const friends = user.friends;
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

const deleteFriendFromList = async (req, res) => {
  const { currentUserId, selectedUserId } = req.body;

  try {
    await User.findByIdAndUpdate(currentUserId, {
      $pull: { friends: selectedUserId },
    });
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { friends: currentUserId },
    });
    await User.findByIdAndUpdate(currentUserId, {
      $pull: { sendRequests: selectedUserId },
    });
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { friendRequests: currentUserId },
    });

    res.status(200).json({ message: "Friend deleted successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

const getSendRequests = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId)
      .populate("sendRequests", "profile email image city")
      .lean();

    const sendRequests = user.sendRequests;
    res.status(200).json(sendRequests);
  } catch (error) {
    console.log("Error fetching send requests:", error);
    res.status(500).json({ Error: error });
  }
};

const rejectFriendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    await User.findByIdAndUpdate(receiverId, {
      $pull: { friendRequests: senderId },
    });
    await User.findByIdAndUpdate(senderId, {
      $pull: { sendRequests: receiverId },
    });

    res.status(200).json({ message: "Friend Request Rejected" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

module.exports = {
  logInUsers,
  sendFiendRequestController,
  getFriendsRequest,
  acceptFriendRequestController,
  acceptedFriendsController,
  deleteFriendFromList,
  getSendRequests,
  rejectFriendRequest,
};
