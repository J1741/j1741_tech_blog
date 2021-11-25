# J1741 Tech Blog

## Description

The Tech Blog is a CMS-style blog site that lets users write their own blog posts, as well as browse and comment on other users' blog posts.

Technologies used by the application include the `bcrypt`, `connect-session-sequelize`, `dotenv`, `express`, `express-handlebars`, `express-session`, `mysql2`, and `sequelize` npm packages, as well as the `Node.js` Javascript runtime, and a local `MySQL` database (for testing).

The database for the deployed application is a `JawsDB` instance, and the application itself is deployed on Heroku.

The deployed application can be accessed [here](https://fierce-temple-55396.herokuapp.com/)

## Table of Contents

- [Features](#features)
- [Contributing](#contributing)
- [Deployed Application](#deployed-application)
- [Questions](#questions)

## Features

### Backend

The following features are currently implemented on the application back-end:

- The application contains an express server which connects to the JawsDB instance in the deployed application (or a local MySQL instance for testing), handles routing, and controls the `handlebars` view engine
- The application uses `bcrypt` to hash user passwords
- The application stores session information for the current user
- The application contains a `schema.sql` file for creating a local `techblog_db`, as well as definitions for three Sequelize models and relationships between them, in: `User.js`, `Post.js`, `Comment.js`, and `index.js`.
- The application contains a small seed data set, as well as a seeding script that utilizes the Sequelize models to create populate a `techblog_db`
- The application contains API routes for performing the full set of CRUD operations on posts in the database. These routes are not currently accessible via the front-end, but can be accessed and used via the following routes in an an API-testing application like Insomnia:

```md
# get all posts in database

GET request at https://fierce-temple-55396.herokuapp.com/api/posts/all

# get single post by id

GET request at https://fierce-temple-55396.herokuapp.com/api/posts/:id

# created a new post in the database

POST request at https://fierce-temple-55396.herokuapp.com/api/posts/new

# edit an existing post in the database

PUT request at https://fierce-temple-55396.herokuapp.com/api/posts/:id

# delete an existing post by id

DELETE request at https://fierce-temple-55396.herokuapp.com/api/posts/:id
```

### Frontend

- When the page is first visited, the application displays all current posts in the database on the application homepage
- The application uses `express-handlebars` as a templating engine to render the `all-posts` view in the `main.handlebars` layout
- The application uses helper functions to format post dates to MM/DD/YYYY format

### Future Development

- Implementing user routes and views for login and sign up
- Limiting user data access by login status/user authorization
- Implementing routes and views for dashboard, single post display, and post editing

## Contributing

Contributions to the Tech Blog are welcome!

The project repo can be forked here: https://github.com/J1741/j1741_tech_blog

## Deployed Application

### Link

The application is deployed at the following Heroku URL: https://fierce-temple-55396.herokuapp.com/

### Demo

The following GIF shows the deployed application:

# ![Alt text](./demo.gif?raw=true "Demo GIF of Tech Blog application")

## Questions

Questions and inquiries about the project can be directed to the developer via GitHub: https://github.com/J1741

Or via email: jseventeen41@gmail.com
