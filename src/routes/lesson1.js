const lesson1 = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

lesson1.get('/contactUs', lesson1Controller.getAllMessage);
lesson1.get('/contactUs/:id', lesson1Controller.getAllMessageById);
lesson1.post('/contactUs', lesson1Controller.createMessage);

module.exports = lesson1;
