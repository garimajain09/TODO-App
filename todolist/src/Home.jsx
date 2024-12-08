import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios';
import { RiDeleteBinFill } from "react-icons/ri";
import { GoCheckbox } from "react-icons/go";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaAngellist } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";



const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8006/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))

  }, [])

  const handleEdit=(id)=>{
    axios.put('http://localhost:8006/update/'+id)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))


  }
  const handleDelete=(id)=>{
    axios.delete('http://localhost:8006/delete/'+id)
    .then(result=>{
      location.reload()
    })
    .catch(err=>console.log(err))
  }

  
  return (
    <div className='home'>
      <div className="header">Todo List<RiTodoFill className='list' /></div>
      <Create />
      {
        todos.length === 0
          ?
          <div><h2>No Record</h2></div>
          :
          todos.map(todo => (
            <div className='task'>
              <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                {todo.done ? <GoCheckbox  className='icon'/>:<MdCheckBoxOutlineBlank className='icon' />}
                
                <p className={todo.done? "line_through":""}>{todo.task}</p>
              </div>
              

              <div>
                <span><RiDeleteBinFill className='icon' onClick={()=>handleDelete(todo._id)} /></span>
              </div>



            </div>
          ))
      }

    </div>
  )
}

export default Home
