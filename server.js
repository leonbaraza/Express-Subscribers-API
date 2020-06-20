require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

// configure routes
const subscribersRoutes = require('./routes/subscribers');
app.use('/subscribers',subscribersRoutes);


// Define the port and listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));