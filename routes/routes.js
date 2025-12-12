const express = require('express');
const routers = express.Router();

const todoControll = require('../controllers/controller');

routers.get('/', todoControll.defaultTodo);
routers.post('/addtodo', todoControll.addTodo);

routers.get('/edit/:id', todoControll.editPage);
routers.post('/edit/:id', todoControll.updateTodo);

routers.get('/delete/:id', todoControll.deleteTodo);

module.exports = routers;
