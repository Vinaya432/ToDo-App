import React, { useEffect, useState } from 'react'
import {addtodoList, removetodoList,toggleTodoCompletion} from '../Redux/listSlice'
import { useDispatch, useSelector } from 'react-redux'


function TodoList() {
    const dispatch=useDispatch()
    const {list,count}=useSelector((state)=>state.listSlice)
     
    const [todoList,setTodoList] = useState('')
   
    
    
    
    const handleSubmit=()=>{
        if(todoList==''){
            alert("Please Fill the form")
        }else{
            console.log(todoList);
            dispatch(addtodoList(todoList))
            setTodoList('')
        }
    }

    const handleToggleCompletion = (id) => {
        dispatch(toggleTodoCompletion({ id }));
      };

    return (
        <>
            <div className='container mt-5 d-flex flex-column justify-content-center rounded  shadow'>
                <h2 className='text-center mb-5'>My Todo List</h2>
                <div className='mb-5'>
                    <input type="text" placeholder='Add todo...' className='rounded' onChange={e=>setTodoList(e.target.value)} value={todoList}  />
                    <button onClick={handleSubmit} className='btn btn-info ms-3'>Submit</button>
                </div>
                {list?.length>0?list.map((item,index)=>(
                        <div className="card w-75" key={index}>
                            <div className="card-body ">
                                <div className="d-flex justify-content-between">
                                <input type='checkbox' className='me-3' checked={item.completed} onChange={() => handleToggleCompletion(item.id)} />                                    <h6>{item.content}</h6>
                                    <button className='btn btn-danger ' onClick={()=>dispatch(removetodoList(item.id))}>Delete</button>
                                </div>
                                   
                                
                             </div>
                        </div>
                )):<p className='fw-bold text-warning'>Your ToDo List is Empty!!!</p>}
                <h6 className='mt-5'>Total Completed items: {count}</h6>
            </div>
        </>
    )
}

export default TodoList