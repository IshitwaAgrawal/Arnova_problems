require('dotenv').config();

const Message = require('../models/message');

const saveMessage = async (req,res) => {
    try{
        let {name,msg} = req.body;
        let message = new Message({
            name,
            msg
        });
        await message.save().then(d=>{
            res.send(d);
        })
    }catch(error){
        res.send(error);
    }
};

module.exports.saveMessage = saveMessage;