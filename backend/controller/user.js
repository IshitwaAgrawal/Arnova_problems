require('dotenv').config();
const User = require('../models/user');

const login = async (req,res) => {
    try{
        let {name,email,phone} = req.body;
        const user = await User.findOne({name:name,email:email,phone:phone});
        if(user){
            if(user.remaining_time>0){
                return res.status(200).json(user);
            }else{
                return res.status(200).json({
                    "msg":"The time is up!"
                });
            }
        }else{
            let rem_time = 10*60;
            let user = new User({
                name,
                email,
                phone,
                rem_time
            });
            await user.save().then(d=>{
                res.send(d);
            });
        }
    }catch(error){
        console.log(error);
    }
}

const view = async (req,res) => {
    await User.find({}).then(d=>{
        res.send(d);
    });
};

module.exports.login = login;
module.exports.view = view;