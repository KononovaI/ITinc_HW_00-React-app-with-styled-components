import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Rectangle } from './components/Rectangle.styled';
import { Title } from './components/Title.styled';
import { Text } from './components/Text.styled';
import { ButtonsArea, StyledButton } from './components/Button.styled';

function App() {
  return (
    <div className="App">
      <Card>
        <Rectangle /* src='./images/Rectangle.png' alt='Rectangle image' *//>
        <Title>Headline</Title>
        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <ButtonsArea>
          <StyledButton>See more</StyledButton>
          <StyledButton>Save</StyledButton>
        </ButtonsArea>
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  border: 2px;
  border-radius: 15px;
  max-width: 300px;
  max-height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  //background: #fff;
`