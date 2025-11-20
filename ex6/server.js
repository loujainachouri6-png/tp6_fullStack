const express = require('express');
const app = express();
const PORT = 3006;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let tasks = [];

app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks });
});

app.post('/tasks', (req, res) => {
    const title = req.body.title;

    if (!title || title.trim() === "") {
        return res.send("Title cannot be empty");
    }

    tasks.push({ id: tasks.length + 1, title });
    res.redirect('/tasks');
});

app.listen(PORT, () =>
    console.log("Ex6 running at http://localhost:" + PORT)
);
