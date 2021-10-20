import  * as C from './AddAreaStyle';
import{ useEffect, useState} from 'react';

function AddArea(props) {

    const [texto, setTexto] = useState('');

    function inserir(e){
        if(e.code === 'Enter' && texto !== ''){
            props.onEnter(texto);
            setTexto('');
        }
    }

    return(
        <C.Container>
            <div className="image">+</div>
            <input type="text"
                placeholder="Adiciona uma tarefa"
                value={texto}
                onChange={ (e) => setTexto(e.target.value)}
                onKeyUp={inserir}/>
        </C.Container>
    );
}

export default AddArea;
