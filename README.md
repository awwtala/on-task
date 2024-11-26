## on-task

# Description

On-Task is a full-stack application designed to streamline task management using Node.js, Express.js, Sequelize, Handlebars.js, and the MVC architecture.

The application allows users to securely log in, create and manage tasks, and track their progress. Upon visiting the On-Task website, users can choose to either sign in or sign up. New users must create an account, while returning users can log in directly. Once authenticated, users can create a new task by providing a name and description. Tasks are displayed on the dashboard, and clicking on a task redirects the user to a detailed view where additional sub-tasks can be created and progress tracked.

# Motivation

The goal of On-Task is to provide a simple and private platform for individuals to organize their tasks effectively. By integrating an intuitive interface with robust backend functionality, On-Task helps users stay on top of their commitments and improve productivity.

## Enjoy organizing with On-Task!

# Table of Contents

    •	Installation
    •	Usage
    •	Questions
    •	Tests
    •	Contributing
    •	License

# Installation

To set up and run On-Task on your local machine: 
1. Clone the repository to your local computer using SSH or HTTPS: git clone <repository-url> 
 2. Navigate to the project folder and install the necessary dependencies: npm install 
 3. Ensure that you have PostgreSQL installed and running on your system. 
 4. Install the following npm packages via terminal if they are not included in your dependencies: 
 • Express: 4.17.1 \
 • Express-handlebars: 5.2.0 \
 • Express-session: 1.17.1 \
 • Pg (PostgresSQL): 8.11.3 \
 • Sequelize: 6.3.5

Usage

    1.	Open your terminal and navigate to the project folder.
    2.	Run the following commands step by step:
    Initialize the project and create the package.json file: npm init

    •	Access PostgreSQL: psql -U postgres



    •	Activate the database schema: \i schema.sql


    •	Exit PostgreSQL: \q



    •	Seed the database with initial data: npm run seed


    •	Start the application server: npm start



    3.	Open your browser and navigate to: https://on-task.onrender.com/login



    4.	Begin creating and managing tasks with ease!

---

Questions

If you have any questions about the project or would like to contribute, feel free to reach out to the team via email:

    •	Dawson Dohlen: dawsondohlen@gmail.com
    •	Dory Celestin: dorycelestin@outlook.com
    •	Kun Wansom: wansom.kun@gmail.com
    •	Tala Awwad: awwad.tala1@yahoo.com

Tests

No automated tests were conducted for this project.

Contributing

This application was developed as part of a collaborative group project:
• Dawson Dohlen \
 • Dory Celestin \
 • Kun Wansom \
 • Tala Awwad

Supported by:
• Instructor: John Young
• Teaching Assistant: Zac Warner
• Learning Platform: Xpert Learning Assistant

License

This project is licensed under the MIT License. See the LICENSE file for more details.

