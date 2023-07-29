const express = require('express');
const adminController = require('../controllers/adminController.js')
const router = express.Router();

router.get('/users', (req, res) => {
  // handle admin user requests here
});

// GET requests
router.get('/students',adminController.getUserData);

router.post('/products', (req, res) => {
  // handle admin product requests here
});

module.exports = router;