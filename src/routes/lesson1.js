const lesson1 = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

lesson1.get('/', lesson1Controller.getAllMessage);
lesson1.get('/:id', lesson1Controller.getAllMessageById);
lesson1.post('/', lesson1Controller.createMessage);
lesson1.patch('/:id', lesson1Controller.editMessage);
lesson1.delete('/:id', lesson1Controller.deleteMessage);

module.exports = lesson1;
