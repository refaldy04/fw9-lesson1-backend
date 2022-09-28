const db = require('../helpers/db');

exports.createMessage = (data, cb) => {
  const query = 'INSERT INTO message(message, name, email, phone_number) VALUES($1, $2, $3, $4) RETURNING *';
  const value = [data.message, data.name, data.email, data.phone_number];
  db.query(query, value, (err, res) => {
    if (res) {
      // console.log(res.rows);
      cb(err, res.rows[0]);
    } else {
      console.log(err);
      cb(err);
    }
  });
};

exports.countAllMessage = (cb) => {
  db.query(`SELECT * FROM message`, (err, res) => {
    if (res) {
      cb(err, res.rowCount);
    } else {
      console.log(err);
    }
  });
};

exports.getAllMessage = (limit, offset, cb) => {
  // console.log(sortBy);
  db.query(`SELECT * FROM message LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
    // console.log(res.rows);
    cb(err, res.rows);
  });
};
