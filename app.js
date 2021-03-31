const express = require('express');
const morgan = require('morgan')
const app = express();

const users = require("./api/routes/middleware/users.middleware");

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(morgan('short'))


// Example Comment
// const productRoutes = require('./api/routes/trees');
// const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users')

app.get('/', (req, res) => {
   //console.log(users.sayHelloInEnglish())
  res.status(200).json({
        message: 'Invalid Request. Missing parameters'
    });
});

app.use('/users', userRoutes);

module.exports = app;
