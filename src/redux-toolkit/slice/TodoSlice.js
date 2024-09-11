import { createSlice } from "@reduxjs/toolkit";

let TodoSlice = createSlice({
    initialState : [],
    name : "counter",

    reducers : {
            addTodos :(state,action) =>{
                    state.push(action.payload)
            },
            updateTodo:(state,action)=>{
               return state.map((ele) => {
                    if(ele?.id === action.payload.id) {
                        return {
                            ...ele,
                            todoName : action.payload.todoName
                        }
                    } else {
                        return ele
                    }
                })
            },

            deleteTodo:(state,action) => {
                return state.filter((ele) => ele?.id !== action.payload)
            }
    }
})

export const {addTodos, updateTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;