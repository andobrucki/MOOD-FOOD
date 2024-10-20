# Implementing a backend for MoodFood

# To Do

## General

- work on new branch "new-features-branch"
- push the new branch to GH git push origin new-feature-branch
- optionally deploy new branch separately on Render for testing
- once ready, merge the branch back into main and deploy the changes

## Backend

- validation and sanitation

## Frontend

- create logout frontend
- create error handling on login and register in frontend not only console log
- create select field
- create pop up (for additional features / track your mood please login)
- form validation
- if going back to home page, page should re-render and offer moodpicker again
- edit README

# nice to have

- select field could be from a component library
- nicer player
- guest route --> what features does the registered route has? could save moods, moodtracker

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
- create user signup page and form
- create user login page and form
- submit the user information to the backend (post request)
- remove button shadow
- style login and signup
- use button component inside singup and login field
- make Layout with moodfood top / conditionally render: when logged in Good Evening etc, when not logged in only moodfood and login page
  **User authentication**

- verify user
- hash password
- create token
- set cookies
- fix navigateHome Route in frontend

- change functionality:

1. Landing page: Moodfood / change protected and public routes / make all public
2. create Login and Sign up button
