import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Todo extends React.Component{
    render(){
        const todo = this.props.todo;
        return(
          <li>
          <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => (todo.finished = !todo.finished)}
          />
          {todo.title}, "未来已来"
        </li>  
        )
      
    }
  }
export default Todo;