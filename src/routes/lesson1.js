const lesson1 = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

lesson1.post('/contactUs', lesson1Controller.createMessage);
lesson1.get('/contactUs', lesson1Controller.getAllMessage);

module.exports = lesson1;
