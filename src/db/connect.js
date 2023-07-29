const mongoose = require('mongoose');

const connection = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://cis:cis123@cis-cluster.tdxwjyw.mongodb.net/student?retryWrites=true&w=majority');  // mongodb://127.0.0.1:27017/students
        console.log("Database is connected to:",connect.connection.name);
    } catch (err) {
        console.log("Unable to connect database due to Error :",err);
    }
}

module.exports = connection