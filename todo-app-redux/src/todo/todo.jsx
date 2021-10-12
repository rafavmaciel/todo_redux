import React, { Component } from "react";
import axios from 'axios'; 
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3001/tasks'


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: "", dateEnd :Date.now() ,list: [] }; //obj todo
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange  = this.handleChange.bind(this);
        this.dateChange  = this.dateChange.bind(this);
        this.handleRemove  = this.handleRemove.bind(this);
        this.handleMarkAsDone  = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending  = this.handleMarkAsPending.bind(this);
        this.refresh()
    }


    handleChange(e) {
      this.setState({...this.state, description: e.target.value})

    }
    dateChange(e) {
        this.setState({...this.state, dateEnd: e.target.value})
    }

    refresh() {
        axios.get(URL).then(resp => this.setState({...this.state, description: '',dateEnd:Date.now(), list: resp.data}))
    }

    handleAdd() {
        const description = this.state.description
        const dateEnd = this.state.dateEnd
        console.log(dateEnd)
        // sempre quando a função espera um evento, mesmo que vc nao vá usa-lo , tem que fazer uma arrow function desse evento primeiro , para depois chamar a função qe vc realmete quer execultar. porque se não, não funciona
        axios.post(URL,{description: description, dateEnd: dateEnd, done: 0 }).then(resp => this.refresh())
    }

    handleRemove(todo){
        const id = todo.idtarefa
        axios.delete(`${URL}/${id}`).then(resp => this.refresh())

    }

    handleMarkAsDone(todo){
        const id = todo.idtarefa
        const todoAtt = {...todo, done: 1}
        axios.put(`${URL}/${id}`, {todo: todoAtt}).then(resp => this.refresh())


    }

    handleMarkAsPending(todo){
        const id = todo.idtarefa
        const todoAtt = {...todo, done: 0}
        axios.put(`${URL}/${id}`, {todo: todoAtt}).then(resp => this.refresh())

    }


    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm
                    description={this.state.description}
                    dateEnd = {this.state.dateEnd}
                    handleAdd={this.handleAdd}
                    handleChange = {this.handleChange}
                    dateChange = {this.dateChange}
                    
                />
                <TodoList 
                    list = {this.state.list}
                    handleRemove = {this.handleRemove}
                    handleMarkAsDone= {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}/>
            </div>
        );
    }
}
