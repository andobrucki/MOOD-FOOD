# Implementing a backend for MoodFood

# To Do

## General

- work on new branch "new-features-branch"
- push the new branch to GH git push origin new-feature-branch
- optionally deploy new branch separately on Render for testing
- once ready, merge the branch back into main and deploy the changes

## Backend

**Routes**
- guest route

--> what features does the registered route has?


**User authentication**

- validation and sanitation
- verify user
- hash password
- create token
- set cookies

## Frontend

- create user signup page and form
- create user login page and form
- complete form by collecting user input and save in a state
- form validation
- submit the user information to the backend (post request)

- fix navigateHome Route in frontend

### DONE

- install packages (bcrypt, cors, dotenv, express, jsonwebtoken, mongoose, cookie parser, http-errors)
- build folder structure for: routes, controllers, models, middleware
- set up server
- connect to database
- set up env file
  **Middleware**
- middleware for handling error for non matching routes
- global error handling middleware
- set up user model
- user route "/users/register"
- user route "/users/login"
**Controllers**
- register controller
- user controller
- logout controller