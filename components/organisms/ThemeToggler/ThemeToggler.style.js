import styled, { css } from "styled-components";

export default css`
  .fa-sun-o {
    font-size: 24px;
  }
`;


export const Button = styled.button`{
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0 0.6rem;
  
  .fa-sun-o {
    font-size: 30px;
  }
}`; 