const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bgicstxkjq9hbf2jnedh-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'ur5bskz6k9vjd2k7',
  password: '7BPOk8zsWXBovAp3ygNd',
  database: 'bgicstxkjq9hbf2jnedh'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  db.end();
});
