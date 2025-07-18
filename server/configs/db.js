import mongoose from 'mongoose'

export const connectDB = async()=>{
    try{

        mongoose.connection.on('connected', ()=>console.log("database connected"))
        

        await mongoose.connect(`${process.env.MONGODB_URI}/BlogIt`)
    }
    catch(error){
        console.log(error.message);
        
    }
}

export default connectDB