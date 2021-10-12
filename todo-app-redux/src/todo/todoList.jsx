import React from "react";
import IconButton from "../template/iconButton";
export default (props) => {

    const renderRows = () => {
        const list = props.list || [];

    const formatDate =(date) => {
        const monthName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto","setembro","outubro", "novembro", "dezembro")
        const fullDate = new Date(date)
        date = fullDate.getDate() + '-' + (monthName[fullDate.getMonth() -1 ]) + '-' + fullDate.getFullYear() ;
        return date  
    }

    const alertDate = (date) => {
        const dateActual = new Date();
        const dateTodo = new Date(date)
        if(dateActual.getDate() === dateTodo.getDate() && dateActual.getMonth() === dateTodo.getMonth() && dateActual.getFullYear() === dateTodo.getFullYear()){
            
            return 'alertTime'
        }
        else{

            return ''
        }


    }
    //todo.done ? 'markedAsdone' : ''
        return list.map((todo) => (
            <tr key={todo.idtarefa}>
                <td className={todo.done ? 'markedAsdone' : ''}>{todo.description} </td>
                <td className={alertDate(todo.dateEnd) , todo.done ? 'markedAsdone' : ''}>{formatDate(todo.dateEnd)} </td>
                {console.log(alertDate(todo.dateEnd))}

                <td>
                    <IconButton
                        style="success"
                        icon="check"
                        hide = {todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}
                    />
                    <IconButton
                        style="warning"
                        icon="undo"
                        hide = {!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}
                    />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        hide = {!todo.done}
                        onClick={() => props.handleRemove(todo)}
                    />{" "}
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th> Data Limite </th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    );
};
