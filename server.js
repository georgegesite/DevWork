// Import the express module
const express = require("express");
// Create an instance of the express application
const app = express();
// Specify a port number for the server
const port = 5000;
// To handle the request body, we need to use a middleware called express.json
// This middleware parses the request body as JSON and adds it to the req object
app.use(express.json());

//Import Routers 
const postRouter = require('./routes/posts');
app.use('/', postRouter);

// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
