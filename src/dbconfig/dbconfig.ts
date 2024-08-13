import mongoose from "mongoose";

export async function connect(){
    try {
       mongoose.connect(process.env.MONGO_URI!)
       const connection =mongoose.connection;

       connection.on('connected', () => {
         console.log('connected successfuly');
       })
       connection.on('error',(err) => {
        console.log('mongodb connection error,make sure mongodb is running.' + err)
        process.exit();
       })


    } catch (error) {
        console.log('error connecting');
        console.log(error)
        
    }
}