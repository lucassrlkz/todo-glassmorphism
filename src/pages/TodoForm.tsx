import React , {useState}from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'


function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault()
        if(!value)return
        addTodo(value)
        setValue("")
    }

    return(
        <FormStyled onSubmit={handleSubmit}>
            <InputGlass
                onChange={(e) => { setValue(e.target.value) } }
                type='text'
                value={value}
                name='todos' />
        </FormStyled>
)}

const FormStyled = styled.form`
    display:flex;
    padding:1rem;
    justify-content:center; 
    align-items:center;
`;
const InputGlass = styled.input`
  padding:1em;
  width: 300px;
  outline:none;
  color:${theme.colors.text};
  
  background: linear-gradient(to right top, rgba(255, 255, 255, 5%), rgba(255, 255, 255, 30%));
  backdrop-filter: blur(4px);
  border-radius:3rem;
  border:none;
  
  ::placeholder{
      color:rgba(255, 255, 255, 75%);
    }
`;

export default TodoForm;