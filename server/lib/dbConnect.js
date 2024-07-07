const mongoose = require('mongoose');
const dbConnect=async ( ) => {
    try{

        await mongoose.connect(
            process.env.MONGO_URL,{
            dbName: "react-login",
           
            }
        );
        console.log("connected to MongoDB");
            }
             
    catch(error)
    {
        console.log("failed to connect to database");
    }
};
module.exports=dbConnect;