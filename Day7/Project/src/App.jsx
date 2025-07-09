import React from 'react'
import Loop from './Loop'
import UseEffect from './UseEffect'
import styles from './App.module.css';
import styled from 'styled-components';
import Inline from './Inline';


// 🔸 Styled Component
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

const App = () => {
  return (
    <div>

      <Loop />
      <br />
      <UseEffect />

      <h3 className={styles.heading}>Hi my name is Saharsh</h3>
      <p className={styles.heading}>I am student</p>

      {/* ✅ Now using Styled Component */}
      <Button>Clicked me</Button>


      <Inline />

    </div>
  )
}

export default App;
