import Todo from "../models/todo.js";

const getAllTodo = async (req, res) => {
    try {
        const allTodo = await Todo.find();

        res.status(200).json(allTodo);
    } catch (error) {
        res.status(404).json({ message: `Todo not found," ${error.message}` });
    }
};

const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            description: req.body.description
        })

        await newTodo.save();

        res.status(200).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: `Failed to add todo, ${error.message}` });
    }
};

const isCompleted = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.complete = !todo.complete;

        todo.save();

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.title = req.body.title;
        todo.description = req.body.description;

        todo.save();

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ message: `Failed to update todo, ${error.message}` });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deleteId = await Todo.findByIdAndDelete(req.params.id);

        if (!deleteTodo) return (`Todo not found, ${res}`);

        res.status(200).json(`Todo deleted succesfully, ${res}`);
    } catch (error) {
        res.status(404).json({ message: `Delete failed, ${error.message}` });
    }
};

export default {
    getAllTodo,
    createTodo,
    deleteTodo,
    updateTodo,
    isCompleted
}