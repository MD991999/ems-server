const multer=require('multer')
// MIME
// storage configuration
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
const filename=`image-${Date.now()}.${file.originalname}`
callback(null,filename)
    }
})
// filter file
const filefilter=(req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpeg' || file.mimetype==='image/jpg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error(`Only .png .jpg .jpeg formats are allowed!!!`))
    }
}
const upload=multer({
    storage:storage,
    fileFilter:filefilter
})

module.exports=upload 