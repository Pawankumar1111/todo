
import './App.css';
import { Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const  App = () => {
const [inputList,setInputList]= useState("")
const[item,setItems]= useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value);
}

  const list =() => {
    setItems((prevItem) => {
      return [...prevItem,inputList];
    });
    setInputList("");

  };
  return (
    <>
    <div className="main">
     <div className="center">
       
         <h1>ToDo List</h1>
   
       <input type="text" placeholder="Add  item"
       value={inputList}
       onChange={itemEvent}
       
       />
       <Button className="newBtn" onClick={list} >
         <AddIcon/>
       </Button>
       <ol>
         {
           item.map( (val,index) => {
             return(<li key={index}>{val} </li>) 
           })
         }
       </ol>
      
     </div>
   </div>
   </>
  );
}

export default App;
