const express = require('express');
const app = express();
const PORT = 3005;

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/contact', (req, res) => {
    res.render('contact', { email: "loujain@example.com" });
});

app.listen(PORT, () =>
    console.log("Ex5 running at http://localhost:" + PORT)
);
