const mongoose=require('mongoose');

const SkillsSchema=new mongoose.Schema({

    category:{
            type:String,
            required:true},
    skills: [
    {
        file:{
            type:String,
            required:true 
        },
        technologie:{
                type:String,
                required:true}
    }
    ]
  
})


module.exports= mongoose.model('skills',SkillsSchema);
