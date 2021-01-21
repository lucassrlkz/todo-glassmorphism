import Head from "next/head"
import React , {useState}from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import TodoForm from './TodoForm'
import  Todo from "./Todo"

export default function Home() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text, isCompleted) => {
    const todo = [...todos, { text , isCompleted}]
    setTodos(todo)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo =(index)=> {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <WrapperDiv>
      <Head>
        <title>Glassmorphism Todos</title>
      </Head>
      <h2>Todo</h2>
        <TodoList>  
          {todos.map((todo, index)=>(
            <Todo 
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}/>
          ))}
        </TodoList>

      <WrapperStyled>
        <motion.div
          animate={{ scale:[1,1.1,1]}}
          transition={{duration: 1}}>
          
          <TodoForm addTodo={addTodo}/> 
        </motion.div>
      </WrapperStyled>
    </WrapperDiv>
  )
}
const TodoList = styled.div`
  display:flex;
  position:relative;
  flex-direction:column;
  overflow-y:auto;
  max-height:400px;
  padding:.5rem;
  ::-webkit-scrollbar {
    width: .2rem;
  }

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to left top, rgba(255, 255, 255, 5%), rgba(255, 255, 255, 30%));
}
`

const WrapperDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  flex-direction:column;

  margin:auto;
  padding: 2rem;
  
  width:900px;
  height:600px;
  background: linear-gradient(to right top, rgba(255, 255, 255, 5%), rgba(255, 255, 255, 30%));
  backdrop-filter: blur(4px);
  border-radius:1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 37%);
`
const WrapperStyled = styled.div`
  position: absolute;
  flex-direction:column;

  bottom: 1rem;
  padding:1.5rem;

  background: linear-gradient(to right top, rgba(255, 255, 255, 5%), rgba(255, 255, 255, 30%));
  backdrop-filter: blur(4px);
  border-radius:2rem;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 2%);
 
`;


