import React from 'react';

function Form({setTextInput, setTodoData, todoData, textInput, completed, setCompleted}){

    const takeTheInputValue = (e) => {
        setTextInput(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setTextInput("");
        if(textInput){
            setTodoData([
                ...todoData,
                {
                    text: textInput,
                    id: "id-"+Math.floor(Math.random() * 1000),
                    completed: completed
                }
            ]);
        }
    }

    return(
        <form>
            <input type="text" name="" value={textInput} onChange={takeTheInputValue} id="" placeholder="Enter the task"/>
            <button onClick={submitForm} type="submit">Submit</button>
        </form>
    )
}

export default Form;