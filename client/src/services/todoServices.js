import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/todo" });

export function getTodos() {
    return api.get('/');
}

export function addTodo(todo) {
    return api.post('/', todo)
}

export function updateTodo(id, todo) {
    return api.put('/' + id + todo)
}

export function deleteTodo(id) {
    return api.delete('/' + id)
}