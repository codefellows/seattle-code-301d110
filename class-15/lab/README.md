# User Authentication with Auth0

## Overview

An "authenticated" application requires that users login to access resources, and thaty can only access their own resources.

To do this, we will need an authentication system to know a user is indeed who they say they are. But we don't want to deal with storing passwords... let's outsource it! Think about all the times you have signed up for an app using your Facebook or Google account. That is done through a process called OAuth. Essentially, the app allows "someone else" (an external identity "provider") to take care of making sure that you are who you say you are.

In this lab, we are going to use a service called Auth0 that will handle most of the challenges of working with external identity providers. Your job will be to create React components to allow users to sign in via the Auth0 service. This service will then give you a secure `jsonwebtoken` or JWT (pronounced "jot").

Once you have that hooked up, you will send that JWT (that essentially says that you are who you say you are) to your backend. You will use a library call `jsonwebtoken` on the server to open the JWT and will verify whether it is valid, and who the user is.

You will be provided the following resources:

1. A simple express API server and React application that can list "dogs" from a database
1. Authorization library for your server
1. Login/Logout buttons for your client


## Feature Tasks

### Authenticating the user on the front-end

1. Set up your account and a new app at Auth0
1. Add the login/logout functionality to the React application
   - Install the Auth0 libraries and components
   - use `withAuth0` to wrap your exports!
   - use `useAuth0` to access the login data/status of your users!
1. Once you can successfully log a user in and out ... control their access
   - Only show the list to the user if they are logged in

### Authorizing the user on the back-end

1. On the server, install the authorization library
1. `use` this library in your express app so that every request checks that we have a valid user
1. Given a valid user, change the `find()` query to restrict results to only that user's dogs.
   - This will require you to change the model to add an email field
   - Edit your seed.js file as well, to add some starter data that has different email addresses associated to each dog.
   - This will allow you to assert that logging in as different users will show only their own set of data!

## Documentation

You must have a complete `README.md` for your repository.

_Your `README.md` must include:_

```md
# Project Name

**Author**: Team Member Names Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
```

## Time Estimates

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```markdown
Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Submission Instructions

1. This is a TEAM assignement.
   - One person on your team should be the driver and manage the code and the repository.
   - The other members of your team will contribute collaboratively
1. Complete all Feature Tasks for the lab, according to the instructions above.
1. Create a PR back to the `main` branch of the repository, showing ALL your work, and merge it cleanly.
1. On Canvas, submit a link to this PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A question within the context of this lab assignment.
    - An observation about the lab assignment, or related 'Ah-hah!' moment.
    - How long you spent working on this assignment.
