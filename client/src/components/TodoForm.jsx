import React, {useState} from 'react'

const TodoForm = (props) => {
    const [todoItem, setTodoItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {todoItem, isComplete: false}
        props.onNewTodo(newTodo);
        setTodoItem("");
    }

    return (
        <div>
            <h1>Todo List</h1>
            {/* Form to add to todo list */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={(e) => setTodoItem(e.target.value)}
                    value={todoItem}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm