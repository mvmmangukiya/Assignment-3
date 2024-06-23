
/*********************************************************************************
*  WEB700 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Meet Mangukiya Student ID: 147162234 Date: 22/06/2024
*
********************************************************************************/ 


const express = require('express');
const app = express();
const path = require('path');
const collegeData = require('./module/collegeData.js');  

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/htmlDemo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/htmlDemo.html'));
});

app.get('/students', (req, res) => {
    res.json(collegeData.getAllStudents());
});

app.get('/student/:id', (req, res) => {
    const student = collegeData.getStudentById(parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student Not Found");
    }
});

app.get('/courses', (req, res) => {
    res.json(collegeData.getAllCourses());
});

collegeData.initialize()
    .then(() => {
        app.listen(HTTP_PORT, () => {
            console.log(`Server listening on port ${HTTP_PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to start server: ${err}`);
    });
