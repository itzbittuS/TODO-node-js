let todos = [];

const defaultTodo = (req, res) => {
    res.render('index', { todos });
};

const addTodo = (req, res) => {
    let todoObj = {
        id: Math.floor(Math.random() * 10000),
        title: req.body.title,
        description: req.body.description,
        status: 'Pending',
        category: 'General'
    };

    todos.push(todoObj);
    res.redirect('/');
};

const editPage = (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.send("Todo not found");
    }

    res.render('pages/edit', { todo });
};

const updateTodo = (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.send("Todo not found");
    }

    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.status = req.body.status;
    todo.category = req.body.category;

    res.redirect('/');
};

const deleteTodo = (req, res) => {
    const id = Number(req.params.id);

    todos = todos.filter(t => t.id !== id);

    res.redirect('/');
};

module.exports = {
    defaultTodo,
    addTodo,
    editPage,
    updateTodo,
    deleteTodo
};
