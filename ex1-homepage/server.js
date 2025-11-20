const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { user: "Loujain" });
});

app.listen(PORT, () =>
    console.log("Ex1 running at http://localhost:" + PORT)
);
