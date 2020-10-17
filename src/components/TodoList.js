import React from 'react'

function TodoList({id, text, items, todoData, setTodoData, completed}) {
    const completedStatus = items.completed;

    const changeCheckValue = () => {
        setTodoData(todoData.map(
            (item) => {
                if(item.id === items.id){
                    return {
                        ...item,
                        completed: !completedStatus,
                    }
                }else{
                    return item;
                }
            }
        ));
    }
    
    const deleteItem = () => {
        setTodoData(todoData.filter((el) => el.id !== items.id));
    }
    return (
        <li className={`todo-item ${(items.completed)? "completed" : ''}`} id={id}>
            <div className="left">
                {text}
            </div>
            <div className="right">
                <button className="check-list" type="button" title="Completed" onClick={changeCheckValue}>Done</button>
                <button className="delete-list" type="button" title="Delete" onClick={deleteItem}>X</button>
            </div>
        </li>
    )
}

export default TodoList
