const express = require('express');
const router = express.Router();
const { getFav, addFav, deleteFav } = require('../controllers/fav');

router.router('/get/:id').get(getFav);
router.router('/add').post(addFav);
router.router('/delete/:id').patch(deleteFav);

module.exports = router;