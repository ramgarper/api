const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

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
});

app.get('/boats', (req, res) => {
  const nombreBarco = req.query.nombre_barco;
  const query = 'SELECT * FROM barcos WHERE nombre_barco = ?';
  db.query(query, [nombreBarco], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Error querying the database');
      return;
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
