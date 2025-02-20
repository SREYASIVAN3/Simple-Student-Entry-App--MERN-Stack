const mongoose=require("mongoose")
function DBConnect(){
    mongoose.connect("mongodb+srv://Sreya:I9lxLXtj5wG0ixo0@cluster0.lqhdy.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0",
        {
        useNewUrlParser:true
    }).then((conn)=>{
        console.log("connected to DB");
    }).catch((err)=>{
        console.log("Some error"+err)

})
}

module.exports=DBConnect;
   