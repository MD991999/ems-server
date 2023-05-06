const mongoose=require('mongoose')
const DB=process.env.database

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Mongodb atlas connected');
}).catch((err)=>{
    console.log(err);
})



