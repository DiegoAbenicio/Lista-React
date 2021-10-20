import './App.css';
import  * as C from './style';
import{ useEffect, useState} from 'react';
import AddArea from './components/AddArea';

function App() {

  const [list, setList] = useState([
    {id: 1, task: "Ir Correr", done: true},
    {id: 2, task: "Ir Comer", done: true},
    {id: 3, task: "Ir Academia", done: false},
  ])

  function addTask(taskName){
    let newList = [...list]; 
    newList.push({
      id: list.length+1,
      task: taskName,
      done: false
    })
    setList(newList)
  }

  return(
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={addTask}/>

          <ul>
            {list.map((valor, indice) => (<li key={indice}>{valor.task}</li>))}
          </ul>
        </C.Area>
    </C.Container>
  );
}

export default App;
