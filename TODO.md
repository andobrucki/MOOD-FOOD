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

- form validation
- submit the user information to the backend (post request)
- use button component inside singup and login field
- fix navigateHome Route in frontend
- make Layout with moodfood top / conditionally render: when logged in Good Evening etc, when not logged in only moodfood and login page
- Signup small option, going to a new page with mood food on top
- fix navigate home
- remove button shadow
-

# nice to have

- new font
- nicer shadows
- select field could be from a component library
- nicer player

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
