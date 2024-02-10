// script.js
window.onload = function() {
    var projects = [
        { name: 'Project 1', description: 'This is project 1', goal: 1000, funded: 200 },
        { name: 'Project 2', description: 'This is project 2', goal: 2000, funded: 500 },
        // Add more projects as needed
    ];

    var projectsContainer = document.getElementById('projects');
    projects.forEach(function(project) {
        var projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        var projectName = document.createElement('h2');
        projectName.textContent = project.name;
        projectCard.appendChild(projectName);

        var projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectCard.appendChild(projectDescription);

        var projectGoal = document.createElement('p');
        projectGoal.textContent = 'Goal: $' + project.goal;
        projectCard.appendChild(projectGoal);

        var projectFunded = document.createElement('p');
        projectFunded.textContent = 'Funded: $' + project.funded;
        projectCard.appendChild(projectFunded);

        projectsContainer.appendChild(projectCard);

        var currentPage = 1;
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value;
    // Send a request to your backend with the search query and current page
    // ...
});
// Add this to your script.js
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Send a request to your backend to create a new user
    // ...
});
// script.js
document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('click', function() {
        // Do something when a project card is clicked
        // For example, navigate to the project's page
    });
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // Send a request to your backend to update the user's profile
    // ...
});
    });

    // Add this to your script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value;
    // Send a request to your backend with the search query
    // ...
});


// This is a simplified example using Express.js and MongoDB
// This is a simplified example using Express.js and MongoDB
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const app = express();

MongoClient.connect('mongodb://your-mongodb-url', function(err, client) {
    const db = client.db('your-db-name');
    const collection = db.collection('users');

    app.post('/register', function(req, res) {
        const username = req.body.username;
        const password = bcrypt.hashSync(req.body.password, 10); // Hash the password

        collection.insertOne({ username, password }, function(err, result) {
            res.json({ success: true });
        });
    });

    app.post('/profile', function(req, res) {
        const username = req.body.username;
        const name = req.body.name;
        const email = req.body.email;

        collection.updateOne({ username }, { $set: { name, email } }, function(err, result) {
            res.json({ success: true });
        });
    });
});

}
