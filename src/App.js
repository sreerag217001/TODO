
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  
  function handleDeleteClick(id){
    const removeItem=toDos.filter((toDo)=>{
      return toDo.id!==id;
    });
    setToDos(removeItem);
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1 style={{color:'white'}}>TodoList</h1>
    </div>
    <div className="subHeading">
      <h1>Whoosp, Its wednsday &#128578; &#9749;</h1>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text"placeholder='&#128394; Add Item...' id='add' />&nbsp;&nbsp;
      <i onClick={()=>setToDos([...toDos,toDo]) } class="fa-sharp fa-solid fa-plus"></i>
      
    
    </div>
    <div className="todos">
      {toDos.map((value)=>{

     
       return (<div className="todo">
      <div className="input">
    <input type="text"placeholder={value} id='add' />&nbsp;&nbsp;
    <i onClick={(e)=>handleDeleteClick(toDo.id)}class="fa-solid fa-trash"></i>
    </div>
      </div>)
 })}
    </div>
    
    </div>
  );
}

export default App;
