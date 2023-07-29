const userModel = require('../models/studentModel.js');

const getUserData = async (req,res) => {
    try{
        const studentData = await userModel.find().select('-_id -createdAt -updatedAt -__v');
        if(studentData.length == 0){
            res.status(400);
            throw new Error("No student data in database !");
        }
        const studentCount = await userModel.countDocuments()
        //console.log(studentCount)
        res.status(200).json({response : [
            {"studentData" : studentData},
            {"studentTotalCount" : studentCount}
        ]});
    }catch(err){
        res.status(500).json({response : err});
    }
    
}

module.exports = {
    getUserData
}