import { styled } from "styled-components"

export const ButtonsArea = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 20px;
  padding-bottom: 22px;

  button {
    cursor: pointer;
  }
`

export const StyledButton = styled.button`
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
	&:hover {
		background-color: #4b45456a;
	}
`

export const LightStyledButton = styled(StyledButton)`
	background: transparent;
	color: #4e71fe;
`