const db = require('../helpers/db');

exports.createMessage = (data, cb) => {
  const query = 'INSERT INTO message(message, name, email) VALUES($1, $2, $3) RETURNING *';
  const value = [data.message, data.name, data.email];
  db.query(query, value, (err, res) => {
    if (res) {
      console.log(res.rows);
      cb(err, res.rows[0]);
    } else {
      console.log(err);
      cb(err);
    }
  });
};

exports.getAllMessage = (cb) => {
  // console.log(sortBy);
  db.query(`SELECT * FROM message `, (err, res) => {
    console.log(res.rows);
    cb(err, res.rows);
  });
};
