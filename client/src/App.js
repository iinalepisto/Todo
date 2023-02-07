import Axios from "axios";
import { useState, useEffect } from "react";
import Todos from "./Todo.js";
const api = Axios.create({ baseURL: 'http://localhost:5000' });

class App extends Todos {
    state = { todos: [], currentTodo: "" }

    render() {
        const { todos } = this.state;
        return (
            <div className="App">
                <h1>Welcome</h1>
                <h4>Your tasks</h4>

                <div className="todos">
                    {todos.length > 0 ? todos.map((todo) => (
                        <div className={"todo" + (todo.complete ? " is-complete" : "")
                        } key={todo._id} onClick={() => this.handleUpdate(todo._id)}>
                            <div className="checkbox"></div>

                            <div className="text">{todo.text}</div>

                            <div className="delete-todo" onClick={() => this.handleDelete(todo._id)}>x</div>
                        </div>
                    )) : (
                        <p>You currently have no tasks</p>
                    )}
                </div>

                <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

                {popupActive ? (
                    <div className="popup">
                        <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
                        <div className="content">
                            <h3>Add Task</h3>
                            <input type="text" className="add-todo-input" onChange={e => this.handleSChange(e.target.value)} value={this.state.currentTodo} />
                            <div className="button" onClick={this.handleSubmit}>Create Task</div>
                        </div>
                    </div>
                ) : ''}

            </div >
        );
    }
}

export default App;