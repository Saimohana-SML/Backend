const express = require('express');
const app=express();
app.use(express.json());
let students = [];

app.post("/student", (req, res) => {
    const name = req.body.name;
    const dept = req.body.dept;

    const newStudent = {
        name: name,
        dept: dept
    };

    students.push(newStudent);
    res.json(students);
});

app.listen(5000, () => {
    console.log("Server started");
});