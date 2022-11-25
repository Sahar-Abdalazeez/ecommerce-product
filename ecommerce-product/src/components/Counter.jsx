import { useState } from 'react';
import styled from "styled-components";
import add from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg'

const Container = styled.div`
  width: 180px;
  height: 50px;
  background-color: hsl(223, 64%, 98%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
`;

const Count = styled.div`
  font-family: 'Bold';
`;

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <Container >
      <a onClick={() => setCount(count - 1)}><img src={minus} /></a>
      <Count>{count}</Count>
      <a onClick={() => setCount(count + 1)}><img src={add} /></a>

    </Container >
  )

}