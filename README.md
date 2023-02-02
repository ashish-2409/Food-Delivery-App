# Food Delivery Applicaiton
This project is a web application which can be used for ordering food online.  

## Tech used
Expressjs and nodejs ( Backend )\
Reactjs ( Frontend )\
Mongodb ( Database )

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Setup of Database
1. Create an account on mongoDb atlas ( It is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP) ).
2. Create a database of you choice.
3. Now connect the cloud database to you application. To do this:\
    a. Create a file called passwords.js in /src directory.\
    b. In this craete a const 'mongouri' (which contains the connection string taken for you database) and export it.\
    c. Also create a const 'jwtsecret' for using jwt.\
The passwords.js file is ignored by git so that your database credentials are secured.