const express=require('express')
// pathh define cheyanulla router 
const router =new express.Router()
const usercontroller=require('../controllers/usercontroller')
const upload=require('../multerconfig/storageconfig')
// register
router.post('/employee/register',upload.single('user_profile'),usercontroller.userregister)




module.exports=router