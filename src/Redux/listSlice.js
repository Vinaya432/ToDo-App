import { createSlice } from "@reduxjs/toolkit";

const listSlice=createSlice({
        name:'todoList',
        initialState:{
            list:[],
            count:0
        },
        reducers:{
            addtodoList:(state,action)=>{
                let newTodolist={
                    id: Math.floor(Math.random()*100),
                    content: action.payload,
                    completed: false
                } 
                state.list.push(newTodolist)
                console.log(newTodolist);
                localStorage.setItem("list",JSON.stringify(state.list))  
            },
            removetodoList:(state,action)=>{
                 state.list= state.list.filter(item=>item.id!=action.payload)
                 state.count-=1
                 localStorage.setItem("list",JSON.stringify(state.list))   
            },
            toggleTodoCompletion: (state, action) => {
                const { id } = action.payload;
                const todo = state.list.find(item => item.id === id);
          
                if (todo) {
                  todo.completed = !todo.completed;
                  state.count += 1
                }
              }
        }    
    }
    
)
export const {addtodoList,removetodoList,toggleTodoCompletion}=listSlice.actions
export default listSlice.reducer