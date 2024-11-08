import { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
    limparCampos();
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
    limparCampos();
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
    limparCampos();
  };

  const divisao = () => {
    if (segundoValor !== 0) {
      setResultado(primeiroValor / segundoValor);
    } else {
      setResultado("Erro: Divisão por zero");
    }
    limparCampos();
  };

  const porcentagem = () => {
    setResultado((primeiroValor * segundoValor) / 100);
    limparCampos();
  };

  const limparCampos = () => {
    setPrimeiroValor(0);
    setSegundoValor(0);
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  };

  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.CalculatorBox>
        <S.Title>
          Calculadora{" "}
          <FontAwesomeIcon icon={faCalculator} style={{ marginLeft: "10px" }} />
        </S.Title>
        <S.Input1
          id="input1"
          type="number"
          placeholder="Insira um número"
          onChange={capturandoPrimeiroValor}
        />
        <S.Input2
          id="input2"
          type="number"
          placeholder="Insira um número"
          onChange={capturandoSegundoValor}
        />
        <S.ButtonContainer>
          <S.Button onClick={soma}>+</S.Button>
          <S.Button onClick={subtracao}>-</S.Button>
          <S.Button onClick={multiplicacao}>*</S.Button>
          <S.Button onClick={divisao}>/</S.Button>
          <S.Button onClick={porcentagem}>%</S.Button>
        </S.ButtonContainer>
        <h3>{resultado}</h3>
      </S.CalculatorBox>
    </S.MainContainer>
  );
}
