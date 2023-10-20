import mongoose  from "mongoose";

async function connect(url){
    await  mongoose.connect(url);
    console.log("you are succussfully connected to database!!!!")

}

export default connect;