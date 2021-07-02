const express = require('express');
const router = require('./routes');

const app = express();

// This allow us to accept JSON data in the body
app.use(express.json());

// let app use /user router
app.use(router);

// Our app is listening on port: localhost:8080
app.listen(8080, () => console.log('server listening on port 8080'));
