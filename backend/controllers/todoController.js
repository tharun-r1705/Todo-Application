const Todo = require('../models/TodoSchema.js');

const getTodo = async () => {
    try{
        const data = await Todo.find({});
        return data;
    }catch(error){
        console.log("Error in getTodo " , error);
    }
}

const updateTodo = async (req, res) => {
    try{
        const exist = await Todo.findById({_id: req.params.id});
        
        if(!exist){
            console.log("TodoList DoesNot exist");
            return;
        }
    }catch(error){
        console.log("Error in updateTodo ", error);
    }

}

const deleteTodo = async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
    }catch(error){
        console.log("Error in deleteTodo ", error);
    }
}

const createTodo = async (req, res) => {
    try{
        const data = await Todo.create(req.body);
        return data;
    }catch(error){
        console.log("Error in createTodo ", error);
    }
}

module.exports = {
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo
}