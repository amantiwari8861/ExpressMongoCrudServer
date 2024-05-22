const User=require("../models/UserModel")

exports.getAllUsers = async (req, res) => {
    console.log("giving all users");
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getUserById = async (req, res) => {
    console.log("giving user having id "+req.params.id);
    try {
        const user = await User.find({"id":req.params.id});
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createUser = async (req, res) => {
    console.log("adding user : "+JSON.stringify(req.body));
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
exports.insertMany = async (req, res) => {
    console.log("adding users having data :"+JSON.stringify(req.body));

    try {
        const users = req.body;
        const insertedUsers = await User.insertMany(users);
        res.status(201).json(insertedUsers);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateUser = async (req, res) => {
    console.log("updating user having id "+req.params.id+" with data :"+JSON.stringify(req.body));
    try {
        const updatedUser = await User.findOneAndUpdate({"id":req.params.id}, req.body, { new: true });
        if (!updatedUser) return res.status(404).send("User not found");
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteUser = async (req, res) => {
    console.log("deleting user having id "+req.params.id);

    try {
        const deletedUser = await User.findOneAndDelete({"id":req.params.id})
        if (!deletedUser) return res.status(404).send("User not found");
        res.json(deletedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
