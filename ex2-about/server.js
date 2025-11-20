const express = require('express');
const app = express();
const PORT = 3002;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { name: "Loujain Achouri" });
});

app.listen(PORT, () =>
    console.log("Ex2 running at http://localhost:" + PORT)
);
