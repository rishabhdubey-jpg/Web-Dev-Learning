// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Rishabh",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 


import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Connect to MongoDB
await mongoose.connect("mongodb://127.0.0.1:27017/company");

console.log("Connected to MongoDB");

// Employee Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

// Employee Model
const Employee = mongoose.model("Employee", employeeSchema);

// EJS setup
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Generate data
app.get("/generate", async (req, res) => {

    // Clear existing employees
    await Employee.deleteMany({});

    // Dummy employee data
    const employees = [
        {
            name: "Harry",
            salary: 45000000,
            language: "Python",
            city: "New York",
            isManager: true
        },
        {
            name: "Rishabh",
            salary: 1200000,
            language: "JavaScript",
            city: "Bhopal",
            isManager: false
        },
        {
            name: "John",
            salary: 2500000,
            language: "Java",
            city: "London",
            isManager: true
        },
        {
            name: "Emma",
            salary: 1800000,
            language: "C++",
            city: "Toronto",
            isManager: false
        },
        {
            name: "Michael",
            salary: 3200000,
            language: "Python",
            city: "Chicago",
            isManager: true
        },
        {
            name: "Sophia",
            salary: 1500000,
            language: "JavaScript",
            city: "Paris",
            isManager: false
        },
        {
            name: "David",
            salary: 2800000,
            language: "Go",
            city: "Berlin",
            isManager: true
        },
        {
            name: "Olivia",
            salary: 2100000,
            language: "Java",
            city: "Sydney",
            isManager: false
        },
        {
            name: "Daniel",
            salary: 3500000,
            language: "C#",
            city: "Dubai",
            isManager: true
        },
        {
            name: "Ava",
            salary: 1700000,
            language: "PHP",
            city: "Singapore",
            isManager: false
        }
    ];

    // Insert 10 employees
    await Employee.insertMany(employees);

    res.send("10 employee records generated successfully!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
});