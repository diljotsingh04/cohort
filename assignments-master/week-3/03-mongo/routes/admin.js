const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const createUser = Admin.create({
        username,
        password
    });
    if(createUser){
        res.send({ 
            message: 'Admin created successfully' 
        });
    }
    else{
        res.send("Failed To create User from routes");
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imagelink,
        price
    });
    res.send({ 
        message: 'Course created successfully', 
        courseId: newCourse._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find({});
    res.send(allCourses);
});

module.exports = router;