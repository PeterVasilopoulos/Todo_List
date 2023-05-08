import React, {useState} from 'react'

const TodoForm = (props) => {
    const [todoItem, setTodoItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            {/* Form to add to todo list */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTodoItem(e.target.value)}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm