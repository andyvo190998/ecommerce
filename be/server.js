require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

app.use(express.json());

app.use('/api/products', productRoutes)

connectDB();

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});