import * as C from './ListItemStyle'


const ListItem = (props) =>{

    function handleChangeValor(e){
        props.onChange(props.valor.id, e.target.checked)
    }

    return(
        <C.Container done={props.valor.done}>
            <input type="checkbox"
                   checked={props.valor.done}
                   onChange={handleChangeValor}/>
            <label> {props.valor.task} </label>
        </C.Container>
    )
}

export default ListItem;