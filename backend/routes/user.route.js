const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Getting one user by username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({'username': req.params.username});
        res.json(user)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Creating user
router.post('/create',)

module.exports = router;