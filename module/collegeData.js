// data/collegeData.js
let students = [];
let courses = [];

module.exports = {
    initialize: function() {
        return new Promise((resolve, reject) => {
            // Initialize your data here (e.g., reading from JSON files or database)
            // For now, let's add some dummy data
            students = [
                { id: 1, name: "John Doe", course: 1 },
                { id: 2, name: "Jane Smith", course: 2 },
            ];

            courses = [
                { id: 1, name: "Course 1" },
                { id: 2, name: "Course 2" },
            ];

            resolve();
        });
    },

    getAllStudents: function() {
        return students;
    },

    getStudentById: function(id) {
        return students.find(student => student.id === id);
    },

    getAllCourses: function() {
        return courses;
    },

    getCourseById: function(id) {
        return courses.find(course => course.id === id);
    }
};
