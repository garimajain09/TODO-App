import React,{useState} from 'react'
import axios from 'axios'

const Create=()=>{
    
    const[task,setTask]=useState()
    const handleAdd=()=>{
        var x=document.getElementById('input');
        if(x.value===""){
            alert("Enter data");
        }
        else{
            axios.post('http://localhost:8006/add',{task:task})
            .then(result=>{
                location.reload()
            }
            )
            .catch(err=>console.log(err))
        }
        

    }
    return(
        <div className='create_form'>
        <input id="input" type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
        <button type="button " onClick={handleAdd}>Add</button>
        </div>
       
    )
}

export default Create