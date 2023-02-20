import { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import TodoCard from './Component/TodoCard/TodoCard';
import Footer from './Component/TodoCard/Footer';
import Header from './Component/Header';
// import data from './Utils/Dataset'

function App() {
  
  const [toDos,setToDos] = useState([])

  const [newTitle, setNewTitle] = useState('')

  const [newDescription, setNewDescription] = useState('')


  useEffect(()=>{
    let data = localStorage.getItem('data')
    if(data){
      setToDos(JSON.parse(data))
    }
  },[])

  
  //Add new data
  const addHandler = (data) =>{ 
    
    if((newTitle && newDescription) ===''){return alert("One or more fields is empty")}
    let newTodo = {
        id: Math.random(),
        title: newTitle,
        description: newDescription,
        isCompleted: false,
        isDeleted: false
    }
    toDos.push(newTodo)
    console.log(toDos);
    setToDos([...toDos])

    localStorage.setItem("data",JSON.stringify(toDos)) //Updating Local Storage
  }

  const completeHandler = (id) =>{
    const todo = toDos.find(e => e.id === id);
    todo.isCompleted = true
    setToDos([...toDos]) //changing state
    localStorage.setItem("data",JSON.stringify(toDos))
  }
  
  const deleteHandler = (id) =>{
    const todo = toDos.find(e => e.id === id);
    todo.isDeleted = true
    setToDos([...toDos]) //changing state
    localStorage.setItem("data",JSON.stringify(toDos)) //Updating Local Storage
  }
    
  
return (
    <div className="main-container">
    <Header />
      <div className='input-container'>
        <Box
          component="form"
          sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
            }}
        noValidate
        autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter note" variant="outlined" onChange={(e) => {setNewTitle(e.target.value)}  } />
          <TextField id="outlined-basic" label="Enter Description" variant="outlined" onChange={(e) => {setNewDescription(e.target.value)}  } />
          
        </Box>
        <Button variant="outlined" onClick={() => {addHandler(); setNewTitle("")}}>Add Note</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4 className='card-title'>Pending</h4>
          <div className='card-list'>
            {
              toDos?.map((e) => {
              if(!e.isCompleted && !e.isDeleted){
               return <TodoCard key = {e.id} description={e.description} title = {e.title} id={e.id} complete = {completeHandler} delete = {deleteHandler}/>
              }
              return <></>
              
            })}
          </div>
        </div>
        <div className='card-container'>
          <h4 className='card-title'>Completed</h4>
          <div className='card-list'>
          {toDos?.map((e) => {
              if(e.isCompleted && !e.isDeleted){
              return <TodoCard key={e.id} title = {e.title} description={e.description} id={e.id} isCompleted = {e.isCompleted} delete = {deleteHandler}/>
              }
              return <></>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
