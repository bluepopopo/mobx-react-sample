import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Todo from "./Todo";

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>

        已经点击的 {this.props.store.finishedCount}
      </div>
    );
  }

  @action 
  handleInputChange = e =>{
    console.log("target.value ========>"+e.target.value);
    this.newTodoTitle = e.target.value;
  }

  @action
  handleFormSubmit = e => {
    this.props.store.add(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;
