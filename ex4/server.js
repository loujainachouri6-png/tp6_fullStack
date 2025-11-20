const express = require('express');
const app = express();
const PORT = 3004;

app.set('view engine', 'ejs');

let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Practice EJS" }
];

app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks, count: tasks.length });
});

app.listen(PORT, () =>
    console.log("Ex4 running at http://localhost:" + PORT)
);
