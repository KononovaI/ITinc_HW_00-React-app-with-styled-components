import { styled } from "styled-components"


export const ButtonsArea = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 20px;
  margin-bottom: 22px;

  button {
    cursor: pointer;
  }
`

export const StyledButton = styled.button`
  //Inter Bold
  //Apakšveids gaišai pogai
  border-radius: 5px;
	border: 2px solid #4e71fe;
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #fff;
  background: #4e71fe;
`

export const LightStyledButton = styled(StyledButton)`
	background: transparent;
	color: #4e71fe;
`