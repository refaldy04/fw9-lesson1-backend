const { Pool, Query } = require('pg');

const connectionString = 'postgres://postgres:8060a5f5861c4d838f3ee2fcede23e79@localHost:5432/lesson1';

const db = new Pool({
  connectionString,
});

const submit = Query.prototype.submit;
Query.prototype.submit = function () {
  const text = this.text;
  console.log(text);
  submit.apply(this, arguments);
};

module.exports = db;
