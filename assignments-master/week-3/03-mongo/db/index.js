const mongoose = require('mongoose');
require("dotenv").config();

// Connect to MongoDB
const url = `mongodb+srv://diljot_singh:${process.env.MONGO_PASS}@diljot.buqsh.mongodb.net/course_selling_website_cohort?retryWrites=true&w=majority`;
mongoose.connect(url).then(()=>console.log("Connection with DB Successfully!"));

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [mongoose.Schema.Types.ObjectId]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imagelink: String, 
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}