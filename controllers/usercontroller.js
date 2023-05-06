const users = require("../models/userschema");

// register logic
exports.userregister = async (req, res) => {
    // to get image url
    const file = req.file.filename
    const { fname, lname, mobile, email, gender, location, status } = req.body
    if (!fname || !lname || !mobile || !email || !gender || !location || !status || !file) {
        res.status(403).json("All inputs are required")
    }
    try {
        const preuser = await users.findOne({ email })
        if (preuser) {
            res.status(403).json('user already exists')
        }
        else {
            const newuser = new users({
                fname, lname, email, mobile, gender, status, profile: file, location
            })
            // to add to mongodb
            await newuser.save()
            res.status(200).json(newuser)
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
// multer-uploading file handle

