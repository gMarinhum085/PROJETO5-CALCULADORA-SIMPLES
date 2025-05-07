import "./App.css"

export default function App() {
    return (
      <div className="container">
        <h1>Calculadora Simples</h1>
        <input type="number" placeholder="Digite o primeiro número"/><br></br>
        <input type="number" placeholder="Digite o segundo número"/>
        <div className="buttons">
          <button className="btn">Somar</button>
          <button className="btn">Subtrair</button>
          <button className="btn">Multiplicar</button>
          <button className="btn">Dividir</button>
          </div>
        <div className="result">
          <h2>Resultado:</h2>
        </div>
      </div>
    )
  }