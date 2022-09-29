const lesson1 = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const { body } = require('express-validator');

const messageValidation = [
  body('email').isEmail().withMessage('Email format invalid'),
  body('name').isLength({ min: 1, max: 50 }).withMessage('name length invalid'),
  body('phone_number').isMobilePhone(['id-ID']).withMessage('You are not from Indonesia'),
  body('message').isLength({ min: 5, max: 250 }),
];

lesson1.get('/', lesson1Controller.getAllMessage);
lesson1.get('/:id', lesson1Controller.getAllMessageById);
lesson1.post('/', ...messageValidation, lesson1Controller.createMessage);
lesson1.patch('/:id', ...messageValidation, lesson1Controller.editMessage);
lesson1.delete('/:id', lesson1Controller.deleteMessage);

module.exports = lesson1;
