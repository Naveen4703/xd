const express = require('express')
const controller = require('../controllers/student.js')
const router = express.Router();

router.get('/test',(req,res) => {
    res.status(200).json("Server working good");
});

// POST requests
router.post('/register', controller.registerUser );



module.exports = router;