const userModel = require('../models/studentModel.js');

const registerUser = async (req,res) => {
    
    try{
        const raw = req.body;
        const user = new userModel(raw);
        user.save()
            .then(result => res.status(201).send({msg: "Course Register SuccessFull"}))
            .catch(error => res.status(500).send({error}));
        
        } catch(err) {
        res.status(500).json({Response: `Error! unable to regsiter due to: ${err}`});
    }
}


module.exports = {
    registerUser
}