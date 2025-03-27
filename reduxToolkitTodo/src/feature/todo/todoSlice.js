import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos: [{ id: 1, text: "hello" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(),
                 text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) =>{
            console.log(action.payload.tId)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.tId)
            const todo = {
                id: nanoid(),
                 text: action.payload.editInput
            }
            state.todos.push(todo)
        }
    }
})

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer