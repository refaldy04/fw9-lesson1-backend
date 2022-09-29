const db = require('../helpers/db');

exports.getAllMessage = (limit, offset, search, sort, cb) => {
  // console.log(sortBy);
  db.query(`SELECT * FROM message WHERE name LIKE '%${search}%' ORDER BY ${sort} LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
    // console.log(res.rows);
    cb(err, res.rows);
  });
};

exports.countAllMessage = (keyword, cb) => {
  db.query(`SELECT * FROM message WHERE name LIKE '%${keyword}%'`, (err, res) => {
    if (res) {
      cb(err, res.rowCount);
    } else {
      console.log(err);
    }
  });
};

exports.getMessageById = (id, cb) => {
  db.query('SELECT * FROM message WHERE id=$1', [id], (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      console.log(err);
    }
  });
};

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

exports.editMessage = (id, data, cb) => {
  val = [id];
  const filtered = {};
  const obj = {
    name: data.name,
    phone_number: data.phone_number,
    email: data.email,
    message: data.message,
  };

  for (x in obj) {
    if (obj[x] !== null) {
      if (obj[x] !== undefined) {
        filtered[x] = obj[x];
        val.push(obj[x]);
      }
    }
  }

  const key = Object.keys(filtered);
  const finalResult = key.map((val, index) => `${val}=$${index + 2}`);
  console.log(finalResult);
  console.log(val);

  const query = `UPDATE message SET ${finalResult}  WHERE id=$1 RETURNING *`;
  db.query(query, val, (err, res) => {
    if (res) {
      // console.log(res);
      cb(err, res.rows);
    } else {
      console.log(err);
      cb(err);
    }
  });
};

exports.deleteMessage = (id, cb) => {
  const query = 'DELETE FROM message WHERE id=$1 RETURNING *';
  const value = [id];
  db.query(query, value, (err, res) => {
    // console.log(res);
    if (res) {
      cb(res.rows);
    } else {
      console.log(err);
    }
  });
};
