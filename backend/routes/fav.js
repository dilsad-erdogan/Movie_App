const express = require('express');
const router = express.Router();
const { getFav, addFav, deleteFav } = require('../controllers/fav');

router.route('/get/:id').get(getFav);
router.route('/add').post(addFav);
router.route('/delete/:id').patch(deleteFav);

module.exports = router;