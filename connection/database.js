const mongoose = require("mongoose")
const mongourl = "mongodb+srv://prakharsaini1018_db_user:d5TejVLcI4t3PwNQ@mycluster.nimptgl.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster"

mongoose.connect(mongourl, {
   family  : 4
}).then(()=>{
    console.log("successful");
    
}).catch(()=>{
    console.log("Not successful");
    
})