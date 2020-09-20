const express = require("express");

const runServer = () => {
  // Get the current working directory that the local server is being run from.
  const cwd = process.cwd();

  // Initialise the application with Express
  const app = express();

  // Connect the server to the root directory
  app.use(express.static(cwd));

  // Set the default port to connect to.
  const port = process.env.PORT || 3000;

  // Run the server at the specified port.
  app.listen(port, () => {
    console.log(`Server is up and running at port http://localhost:${port}`);
  });
};

runServer();
