import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoDisplay from '../components/TodoDisplay'
import TodoItems from '../components/TodoItems'

const TodoBoard = () => {
    const [todoArray, setTodoArray] = useState([]);

    const newTodo = (todoItem) => {
        setTodoArray([...todoArray, todoItem]);
    }

    const complete = (completedItem, i) => {
        const tempList = [...todoArray];
        tempList[i].isComplete = completedItem;
        setTodoArray(tempList);
    }

    const deleteItem = (i) => {
        const tempList = [...todoArray];
        tempList.splice(i, 1);
        setTodoArray(tempList);
    }

    return (
        <div>
            <TodoForm onNewTodo={newTodo}/>
            <TodoItems todoArray={todoArray} onUpdateComplete={complete} onDelete={deleteItem}/>
        </div>
    )
}

export default TodoBoard