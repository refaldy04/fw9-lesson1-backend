const lesson1Model = require('../models/lesson1');

exports.createMessage = (req, res) => {
  lesson1Model.createMessage(req.body, (err, result) => {
    console.log(req.body);
    return result;
  });
};
