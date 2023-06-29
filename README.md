# Dawn Teach Math's website, built with Vue.js

## Introduction
This repository contains the source code for Dawn Teach Math, a website for teachers to provide a modern interface for students to conveniently access Schoology's course material. The website is built with Vue.js.

## Getting Started
To get started, clone the repository with your preferred code editor (VS Code) or through the terminal:

```bash
git clone https://github.com/JonnyTran/dawn-teach-math
cd dawn-teach-math
```

Install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```
Open the link provided in the prompt with a browser. Any changes made to the source code (src/) will be automatically reflected in the browser, with the .

## Directory structure

To understand more about the Vue.js's directory structure, see (https://itnext.io/how-to-structure-my-vue-js-project-e4468db005ac).
Here are some of the important files and directories in the project:

1. `App.vue`: The main Vue component that serves as the entry point of the application. It will contain the main layout and navigation logic.

2. `Navbar.vue`: A reusable component that represents the navigation bar at the top of the website. It will display the main navigation links and handle the active state.

3. `HomePage.vue`: A component that represents the landing page of the website. It will display the Course section with the available courses.

4. `CoursePage.vue`: A component that represents an individual course page. It will display the course information, syllabus, units, links, and FAQ.

5. `UnitPage.vue`: A component that represents a specific unit within a course. It will display the content of the unit, which will be fetched from the Schoology API.

6. `BioPage.vue`: A component that represents the Bio page. It will display the personal information of the teacher.

7. `ContactPage.vue`: A component that represents the Contact page. It will provide a form for users to contact the teacher.

8. `Chatbox.vue`: A component that represents the chatbox. It will handle user interactions and communicate with OpenAI's API to provide answers to questions.

