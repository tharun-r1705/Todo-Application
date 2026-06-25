const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors);

connectDB();

app.listen(5000, () => console.log("The server is running in the port 5000"));

const UserRoutes = require('../routes/userRoutes.js');
const TodoRoutes = require('../routes/todoRoutes');
const TodoListRoutes = require('../routes/todoListRoutes');

app.use('/users', UserRoutes);
app.use('/todoList', TodoListRoutes);
app.use('/todo', TodoRoutes);

