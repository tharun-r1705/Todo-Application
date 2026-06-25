const TodoList = require('../models/TodoListSchema.js');

const getTodoList = async () => {
    try{
        const data = await TodoList.find({});
        return data;
    }catch(error){
        console.log("Error in getTodoList " , error);
    }
}

const updateTodoList = async (req, res) => {
    try{
        const exist = await TodoList.findById({_id: req.params.id});
        
        if(!exist){
            console.log("TodoList DoesNot exist");
            return;
        }
    }catch(error){
        console.log("Error in updateTodoList ", error);
    }

}

const deleteTodoList = async (req, res) => {
    try{
        await TodoList.findByIdAndDelete(req.params.id);
    }catch(error){
        console.log("Error in deleteTodoList ", error);
    }
}

const createTodoList = async (req, res) => {
    try{
        const data = await TodoList.create(req.body);
        return data;
    }catch(error){
        console.log("Error in createTodoList ", error);
    }
}

modules.export = {
    getTodoList,
    updateTodoList,
    deleteTodoList
};