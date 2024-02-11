// script.js
window.onload = function() {
    var projects = [
        { name: 'Project 1', description: 'This is project 1', goal: 1000, funded: 200 },
        { name: 'Project 2', description: 'This is project 2', goal: 2000, funded: 500 },
        { name: 'Project 3', description: 'This is project 3', goal: 6000, funded: 1000 },
        { name: 'Project 4', description: 'This is project 4', goal: 8000, funded: 600 },
        // Add more projects as needed
    ];

    var projectsContainer = document.getElementById('projects');
    projects.forEach(function(project) {
        var projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        var projectName = document.createElement('h2');
        projectName.textContent = project.name;
        projectCard.appendChild(projectName);

        var donateButton = document.createElement('button');
        donateButton.textContent = 'Donate';
        donateButton.className = 'donate-button';
        projectCard.appendChild(donateButton);

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
document.querySelectorAll('.donate-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Do something when the "Donate" button is clicked
        // For example, navigate to the donation page for the project
    });
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
    });

    // Add this to your script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value;
    // Send a request to your backend with the search query
    // ...
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have an array of projects
    const projectsData = [
        { name: 'Project 1', description: 'Description for Project 1' },
        { name: 'Project 2', description: 'Description for Project 2' },
        // Add more projects as needed
    ];

    const projectsSection = document.getElementById('projects');

    // Function to create a project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const donationButton = document.createElement('button');
        donationButton.textContent = 'Donate';
        // Add event listener for donation button if needed

        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(donationButton);

        return card;
    }

    // Function to display projects
    function displayProjects() {
        projectsData.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsSection.appendChild(projectCard);
        });
    }

    // Load projects when the page is loaded
    displayProjects();
});




}
