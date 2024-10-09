const Fav = require('../models/fav');
const User = require('../models/user');

async function getFav(req, res) {
    try{
        const id = req.params.id;
        const favs = await Fav.find({ user_id: id, is_active: true });

        if(favs) {
            res.status(200).json({ success: true, data: favs });
        } else {
            res.status(404).json({ success: false, message: 'Fav not found!' });
        }
    } catch(error) {
        res.status(500).json({ error: 'Internal server error!' });
    }
};

async function addFav(req, res) {
    try {
        const { user_id, movie_id } = req.body;

        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found!' });
        }

        const existingFav = await Fav.findOne({ user_id: user_id, movie_id: movie_id });
        if (existingFav) {
            if (existingFav.is_active) {
                return res.status(400).json({ success: false, message: 'This movie is already in your favorites!' });
            } else {
                existingFav.is_active = true;
                const updatedFav = await existingFav.save();
                return res.status(200).json({ success: true, message: 'Favorite re-activated', data: updatedFav });
            }
        }

        const fav = new Fav({
            user_id: user_id,
            movie_id: movie_id,
            is_active: true
        });

        const savedFav = await fav.save();
        if (savedFav) {
            res.status(201).json({ success: true, data: savedFav });
        } else {
            res.status(400).json({ success: false, message: 'Fav error!' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error!' });
    }
};

async function deleteFav(req, res) {
    try{
        const id = req.params.id;
        const fav = await Fav.findById(id);

        if(!fav) {
            res.status(400).json({ success: false, message: 'Fav not found!' })
        } else {
            await fav.updateOne({ is_active: false });
            res.status(201).json({ success: true, message: 'Fav deleted successfully!' });
        }
    } catch(error) {
        res.status(500).json({ error: 'Internal server error!' });
    }
};

module.exports = {
    getFav,
    addFav,
    deleteFav
};
