import React from 'react';
import './App.css';
import styled from 'styled-components';

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

const Rectangle = styled.img`
  background: url("./images/Rectangle.png");
  border-radius: 10px;
  margin: 10px 10px 20px 10px;
  width: 280px;
  height: 170px;
`
const Title = styled.h1`
  //Inter Bold
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-left: 20px;
`

const Text = styled.p`
  //Inter Medium
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.66667;
  color: #abb3ba;
  margin: 20px;
`

const ButtonsArea = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 20px;
  margin-bottom: 22px;

  button {
    cursor: pointer;
  }
`

const StyledButton = styled.button`
  //Inter Bold
  //Apakšveids gaišai pogai
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #fff;
  background: #4e71fe;
`