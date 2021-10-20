import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const BotaoPrincipal = styled.button`
  background: ${props => props.cor || 'transparent'};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const CampodeEntrada = styled.input``;


function App() {

  const [conta, setConta] = useState(0);
  const [gorjeta, setGorjeta] = useState(0);
  const [lista, setLista] = useState([]);

  function carregar(){
    console.log('Carregando a página')
    setLista(["Diego", "Laura", "Cleitinho"]);
  }

  useEffect(carregar, []);

  useEffect( () => {
    console.log(conta);
  },[conta]);

  return (
    <div className="App">
       
        <p>Entre com o valor da conta</p>
        <CampodeEntrada value={conta} onChange={(e) => setConta(parseFloat(e.target.value) )}/>
        <p>Entre com o valor da gorjeta</p>
        <CampodeEntrada value={gorjeta} onChange={(e) => setGorjeta(parseFloat(e.target.value) )}/>

        { conta > 0 && gorjeta > 0 && 
            <div>
              <p>Sub-total: R$ {conta} </p>
              <p>Gorjeta: R$ {gorjeta/100 * conta} </p>
              <p>Total: R$ {(gorjeta*100) + conta} </p>
            </div>
        }

        <hr/>
        <ul>

          {lista.map((valor, indice) => (<li key={indice}>{valor}</li>))}

        </ul>

    </div>
  );
}

export default App;
