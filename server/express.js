import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
export default app;

/*body-parser: Request body-parsing middleware to handle the complexities of parsing streamable request objects so that we can simplify browser-server communication by exchanging JSON in the request body. To install the module,  Then, configure the Express app with bodyParser.json() and bodyParser.urlencoded({ extended: true }). 
cookie-parser: Cookie parsing middleware to parse and set cookies in request objects.
compression: Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware.
helmet: Collection of middleware functions to help secure Express apps by setting various HTTP headers.
cors: Middleware to enable cross-origin resource sharing (CORS).*/
