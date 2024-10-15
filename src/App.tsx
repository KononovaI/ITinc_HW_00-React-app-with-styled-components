import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Rectangle } from './components/Rectangle.styled';
import { Title } from './components/Title.styled';
import { Text } from './components/Text.styled';
import { ButtonsArea, StyledButton, LightStyledButton } from './components/Button.styled';
import img from "./images/Rectangle.png";

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Rectangle src={img} alt='Rectangle image'/>
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <ButtonsArea>
            <StyledButton>See more</StyledButton>
            <LightStyledButton>Save</LightStyledButton>
          </ButtonsArea>
        </Card>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`

const Card = styled.div`
  border-radius: 15px;
  max-width: 300px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`