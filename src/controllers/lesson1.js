const lesson1Model = require('../models/lesson1');

exports.getAllMessage = async (req, res) => {
  let { limit = 5, page = 1, search = '', sort = 'name' } = req.query;

  const offset = (page - 1) * limit;

  lesson1Model.getAllMessage(limit, offset, search, sort, (err, result) => {
    const pageInfo = {};
    lesson1Model.countAllMessage(search, (err, totalData) => {
      pageInfo.totalData = totalData;
      pageInfo.totalPage = Math.ceil(totalData / limit);
      pageInfo.currentPage = parseInt(page);
      pageInfo.limit = parseInt(limit);
      pageInfo.nextPage = pageInfo.currentPage < pageInfo.totalPage ? pageInfo.currentPage + 1 : null;
      pageInfo.prevPage = pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;

      return res.send({ result, pageInfo });
    });
  });
};

exports.getAllMessageById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  lesson1Model.getMessageById(id, (err, result) => {
    if (result.length > 0) {
      return res.send(result[0]);
    } else {
      return res.redirect('/404');
    }
  });
};

exports.createMessage = (req, res) => {
  lesson1Model.createMessage(req.body, (err, result) => {
    // console.log(req.body);
    return res.send(result);
  });
};

exports.editMessage = (req, res) => {
  const { id } = req.params;
  lesson1Model.editMessage(id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result[0]);
    }
  });
};

exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  console.log(id);
  lesson1Model.deleteMessage(id, (result) => {
    return res.send({ message: 'message deleted' });
  });
};
