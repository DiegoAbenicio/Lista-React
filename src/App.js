import './App.css';

function Saudacoes(props){
  return(
    <p>
      Bom dia {props.nome}!!! Você tem {props.idade} anos
    </p>
  );
}

function Imprimir(props){
  return(
    <div>
      <p>Cabecalho:</p>
      {props.children}
    </div>
  )
}

function App() {

  const idade = 18;
  const endereco = {
                    cidade: 'Formiga',
                    estado: 'MG'
                   };
  

  return (
    <div className="App">
        <p>
          -------------Training-------------
        </p>
        <p>
          {idade}
        </p>
        <p>
          {endereco.cidade} / {endereco.estado}
        </p>
        <img src={"https://www.google.com/google.jpg"} alt="img google"></img>

        <Saudacoes nome={"Bruno"} idade={18}/>
        <Saudacoes nome={"Diego"} idade={16}/>
        <Saudacoes nome={"Messias"} idade={30}/>

        <Imprimir>
          <div style={ {color: '#000', fontWeight: 'bold'}}>
            <h1>IFMG</h1>
            <h2>Campus Formiga</h2>
          </div>
        </Imprimir>
    </div>
  );
}

export default App;
