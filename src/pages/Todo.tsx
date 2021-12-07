import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <TodoStyled
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <FaCheck
          onClick={() => completeTodo(index)}
          style={{ color: "whitesmoke" }}
        />
        <FaTrashAlt
          onClick={() => removeTodo(index)}
          style={{ color: "whitesmoke", marginLeft: "20px" }}
        />
      </div>
    </TodoStyled>
  );
}
const TodoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: flex-start;
  width: 300px;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 5%),
    rgba(255, 255, 255, 30%)
  );
  color: black;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`;
