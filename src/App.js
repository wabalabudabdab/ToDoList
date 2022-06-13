import React, {useEffect, useState} from 'react'
import './App.css'
import ToDoList from './ToDo/ToDoList'
import Context from './context'
import AddTodo from './ToDo/AddTodo'

function App() {
  let [todos, setTodos] = React.useState(
  [
    {id: 0, completed: true, title: 'find new job'},
    {id: 1, completed: false, title: 'learn components'},
    {id: 2, completed: false, title: 'make a project'},
  ]
  )
    const [filtered, setFiltered] = useState(todos);


    useEffect(()=> {
        setFiltered(todos)
    },[todos])


  function toDoFilter(completed){
      if (completed ==='all'){
          setFiltered(todos);
      }
      else {
          let newTodo = todos.filter(item => item.completed === completed)
          setFiltered(newTodo)
      }
  }

  function clearDone(){
      setTodos(todos.filter(
            function (todo){
                return todo.completed === false
            }));
    }

  function toggleToDo(id) {
    setTodos(
      todos = todos.map(todo => {
      if (todo.id === id) { 
        todo.completed = !todo.completed
      }
      return todo
      })
    )
  } 

    function addTodo(title) {
      setTodos(todos.concat([{
        title,
        id: Date.now(),
        completed: false,
      }]))
    }

    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
    

  return (

    <Context.Provider value={{ removeTodo }}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <button
                onClick={()=> toDoFilter(true)}>ГОТОВЫЕ</button>
            <button
                onClick={()=> toDoFilter(false)}>НАДО СДЕЛАТЬ</button>
            <button
                onClick={()=> toDoFilter("all")}>ПОКАЗАТЬ ВСЕ</button>
            <button
                onClick={()=> clearDone()}>ОЧИСТИТЬ ВЫПОЛНЕННЫЕ</button>
        </div>

      <div className= "wrapper">
        
        <h1>Todo list</h1>
        <AddTodo onCreate= {addTodo}/>
        {filtered.length ? (
        <ToDoList todos={filtered} onToggle= {toggleToDo}/>
        ) : (
          <p>No todos</p>
        )}
      </div>

    </Context.Provider>


  )
}

export default App;
