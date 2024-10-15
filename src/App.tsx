import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Card>
        <Rectangle />
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

`

const Rectangle = styled.image`

`
const Title = styled.h1`
  //Inter Bold
`

const Text = styled.p`
  //Inter Medium
`

const ButtonsArea = styled.div`

`

const StyledButton = styled.button`
  //Inter Bold
  //Apakšveids gaišai pogai
`