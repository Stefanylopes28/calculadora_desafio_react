import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: pink;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const CalculatorBox = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #51aff7;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Input1 = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 5px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

export const Input2 = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 5px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #51aff7;
  color: pink;
  border: none;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: white;
  }
`;
