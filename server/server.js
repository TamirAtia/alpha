const express= require("express");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const mongoose= require('mongoose');
require('dotenv/config')

//Initialize App, enale cors, define our app to "reformat" the response to json
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(express.urlencoded({ extended: true}));

app.use(express.json());

//Import Routes
const usersRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
const productRoute = require('./routes/product');
const filesRoute = require('./routes/file');
app.use('/api', usersRoute)
app.use('/api', orderRoute)
app.use('/api', productRoute)
app.use('/api', filesRoute)
//Routes
app.get('/', (req, res)=>{
    res.send('hello');
});

//Connect to mongodb
mongoose.connect(process.env.DBACCESS, ()=>
    console.log('connected')
)
//Listen to server
app.listen(3000);