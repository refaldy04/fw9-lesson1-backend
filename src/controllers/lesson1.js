const lesson1Model = require('../models/lesson1');

exports.getAllMessage = async (req, res) => {
  let { limit = 5, page = 1 } = req.query;

  const offset = (page - 1) * limit;

  lesson1Model.getAllMessage(limit, offset, (err, result) => {
    const pageInfo = {};
    lesson1Model.countAllMessage((err, totalData) => {
      console.log(totalData);
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

exports.createMessage = (req, res) => {
  lesson1Model.createMessage(req.body, (err, result) => {
    // console.log(req.body);
    return res.send(result);
  });
};
