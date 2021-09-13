import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

/*First, we import the config variables to set the port number
 that the server will listen on and then import the configured Express app
  to start the server.
   To get this code running and continue development,
    we can run yarn development from the command line.
     If the code has no errors, the server should
      start running with Nodemon monitoring for code changes.
       Next, we will update this server code to integrate the database
     connection.
*/
