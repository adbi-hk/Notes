import mongoose from "mongoose"


export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY !!");
    }catch(error){
        console.error("Error connecting to MONGODB :" , error);
        process.exit(1); // exit with failure
    }
}

//LDEgquExIiFdPCII

//mongodb+srv://biaddiaelhak:LDEgquExIiFdPCII@cluster0.vxlidsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


