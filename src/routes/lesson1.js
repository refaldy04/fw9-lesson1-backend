const lesson1 = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

lesson1.post('/contactUs', lesson1Controller.createMessage);

module.exports = lesson1;
