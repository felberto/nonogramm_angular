const User = require('../models/user.model');

// Create user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username && !req.body.password) {
        return res.status(400).send({
            message: "User can not be empty."
        });
    }

    // Check if username already exists
    User.findOne({'username': req.body.username}).then(
        checkUser => {
            if (checkUser != null) {
                return res.status(409).send({
                    message: "User already exists."
                });
            } else {
                console.log("User doesnt exist")
            }
        }
    );

    // Create a user
    const user = new User({
        username: req.body.username || "Invalid username",
        password: req.body.password || "Invalid password"
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};