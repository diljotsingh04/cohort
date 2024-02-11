const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.send({
        message: 'User created successfully'
    })
});

router.get('/courses', async (req, res) => {
    const allUserCourses = await Course.find({});

    res.send(allUserCourses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const cid = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
        {username},
        {$push: {
            purchasedCourses: cid
        } 
    });
    
    res.send({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;

    const purchasedCoursesByUser = await User.findOne({username});
    
    const courseMap = await Course.find({
        _id:{
            "$in": purchasedCoursesByUser.purchasedCourses
        }
    });

    res.send(courseMap);
});

module.exports = router