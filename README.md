# Task-Manager-API

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Piyu2103/task-manager-api/blob/master/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TASKPAT - Task Manager API</h3>

  <p align="center">
    Taskpat facilitates uses to manage tasks according to their deadlines.
    <br />
    <a href="https://github.com/Piyu2103/task-manager-api/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Piyu2103/task-manager-api/blob/master/README.md#usage">View Demo</a>
    ·
    <a href="https://github.com/Piyu2103/task-manager-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/Piyu2103/task-manager-api/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

* TaskPat facilitates users to login and perform CRUD operations on their profile and tasks added by user.
* Utilized Multer library for uploading and Sharp library for preprocessing the user profile avatar.
* Configured JWT for authentication token generation and Bcrypt library for password encryption.
* Integrated SendGrid Email API for sending subscription and related emails to user's registered email-id.
* For Database, MongoDB is used with Mongoose client to store data on an online MongoDB Atlas server.
* Created an automated unit testing suite using the Jest framework and supertest.



### Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

This is how to set up your project locally.
To get a local copy up and running, follow these simple steps.

### Prerequisites 

* npm
  ```sh
  npm install npm@latest -g
  ```
* Postman
* VS Code
* MongoDB Compass

### Installation

1. Get a free SendGrid Email API Key at [Send Grid](https://sendgrid.com/solutions/email-api/)
2. Clone the repo
   ```sh
   git clone https://github.com/Piyu2103/task-manager-api
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```
5. Run `npm test` in the project directory to run all the test cases.


<!-- USAGE EXAMPLES -->
## Usage

### Using [POSTMAN](https://www.postman.com/)
* Download POSTMAN 
* Import the postman collection from [here](https://git.io/Jus1D)
* Set the necessary environment variables, {{url}}=localhost/[portnumber] and authtoken generated {{auth}}


### Endpoints and Routes
* POST - Create User
* POST - Login user
* POST - Logout User
* POST - Logout from all devices
* POST - Create Task
* POST - Upload Avatar
* GET - Read profile
* GET - Read user
* GET - Read tasks
* GET - Read task
* PATCH - Update user
* PATCH - Update task
* DEL - Delete user
* DEL - Delete Avatar

<!-- ROADMAP -->
## Roadmap

See the [Open Issues](https://github.com/Piyu2103/task-manager-api/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.



<!-- CONTACT -->
## Contact

Your Name - [Piyush Singhal](https://github.com/Piyu2103) - singhalpiyush21@gmail.com

Project Link: [task-manager-api](https://github.com/Piyu2103/task-manager-api)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Postman](https://www.postman.com/)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Jest](https://www.npmjs.com/package/jest)
* [Multer](https://www.npmjs.com/package/multer)
* [Sharp](https://www.npmjs.com/package/sharp)


