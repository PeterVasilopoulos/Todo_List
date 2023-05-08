import React from 'react'

const TodoItems = (props) => {

    const toggleComplete = (e, i) => {
        props.onUpdateComplete(e.target.checked, i);
    }

    const deleteItem = (i) => {
        props.onDelete(i);
    }

    return (
        <div>
            {
                props.todoArray.map((todo, i) => {
                    return (
                        <div key={i} className='todo-item'>
                            {/* Todo Item Name */}
                            <p
                                style={todo.isComplete ? {textDecoration: 'line-through'} : {}}
                            >{todo.todoItem}</p>

                            {/* CheckBox */}
                            <input 
                                type="checkbox" 
                                checked={todo.isComplete}
                                onChange={(e) => toggleComplete(e, i)}
                            />

                            {/* Delete Button */}
                            <button className='delete' onClick={() => deleteItem(i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoItems