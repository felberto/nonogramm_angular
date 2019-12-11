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
                console.log("User does not exist")
            }
        }
    );

    // Create a user
    const user = new User({
        username: req.body.username || "Invalid username",
        password: Buffer.from(req.body.password).toString('base64') || "Invalid password"
    });

    // Save user in the database
    user.save()
        .then(data => {
            const resUser = new User({
                username: data.username
            });
            res.send(resUser);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};

// Login
exports.login = (req, res) => {
    // Validate request
    if (!req.body.username && !req.body.password) {
        return res.status(400).send({
            message: "User can not be empty."
        });
    }

    // Check if user exists and password match
    User.findOne({'username': req.body.username}).then(
        checkUser => {
            if (checkUser != null) {
                if (req.body.password === Buffer.from(checkUser.password, 'base64').toString()) {
                    const resUser = new User({
                        username: req.body.username
                    });
                    res.send(resUser);
                } else {
                    return res.status(401).send({
                        message: "Login failed."
                    });
                }
            } else {
                return res.status(401).send({
                    message: "Login failed."
                });
            }
        }
    );
};