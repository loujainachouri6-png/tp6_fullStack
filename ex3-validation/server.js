const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());
app.set('view engine', 'ejs');

let tasks = [];

app.post('/api/tasks', (req, res) => {
    const title = req.body.title;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const task = {
        id: tasks.length + 1,
        title
    };

    tasks.push(task);
    res.status(201).json(task);
});

app.listen(PORT, () =>
    console.log("Ex3 running at http://localhost:" + PORT)
);
