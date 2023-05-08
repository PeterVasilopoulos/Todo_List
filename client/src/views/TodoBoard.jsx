import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoDisplay from '../components/TodoDisplay'

const TodoBoard = () => {
    const [currentTodo, setCurrentTodo] = useState("")

    const newTodo = (todoItem) => {
        setCurrentTodo(todoItem);
    }

    return (
        <div>
            <TodoForm onNewTodo={newTodo}/>
            <TodoDisplay todo={currentTodo}/>
        </div>
    )
}

export default TodoBoard