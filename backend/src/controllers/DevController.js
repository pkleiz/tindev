const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;
        
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        try{
                    const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })
        }catch(e){
            console.log(e);
        }


        return res.json(dev);
    }
};