import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import TodoList from './component/TodoList'
import TodoListModel from './model/TodoListModel'

const store = new TodoListModel();

render(
    <div>
      <TodoList store={store} />
    </div>,
    document.getElementById("root")
  );


store.add("上学");
store.add("写作业");
store.todos[0].finished = true;