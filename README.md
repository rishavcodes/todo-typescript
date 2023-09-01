This is a simple To-Do List web application built with React, TypeScript, and React Router. It allows users to add, mark as complete, and remove tasks, as well as navigate between different pages. The application also demonstrates error handling.

Table of Contents
Prerequisites
Getting Started
Clone the Repository
Install Dependencies
Running the Application
Usage
Project Structure
Error Handling
Contributing
License
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed on your local system.
Getting Started
Clone the Repository
To get a local copy of the project, you can clone the GitHub repository using the following command:

bash
Copy code
git clone https://github.com/your-username/todo-list-app.git
Replace your-username and todo-list-app with your GitHub username and desired project name.

Install Dependencies
Navigate to the project directory and install the required dependencies using npm:

bash
Copy code
cd todo-list-app
npm install
Running the Application
To run the application locally, use the following command:

bash
Copy code
npm start
The application will start on http://localhost:3000 by default. You can access it in your web browser.

Usage
Adding a Task:

Enter a task in the input field.
Select the priority level (Low, Medium, High) from the dropdown.
Click the "Add Task" button.
Completing a Task:

Click the checkbox next to a task to mark it as complete or incomplete.
Removing a Task:

Click the "Remove" button next to a task to remove it from the list.
Navigation:

Use the navigation links in the top menu to switch between the Task List, Home, and About pages.
Project Structure
The project is organized as follows:

src/: Contains the source code of the application.
components/: Contains React components.
types.ts: Defines custom types used in the application.
App.tsx: Main component responsible for routing and state management.
styles.css: Centralized CSS file for styling.
Error Handling
The application demonstrates error handling by simulating an error during data fetching. If an error occurs, an error message is displayed at the top of the task list.
