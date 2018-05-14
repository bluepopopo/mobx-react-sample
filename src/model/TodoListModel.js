import TodoModel from './TodoModel'
import { action, observable, computed } from 'mobx';

class TodoListModel {
    @observable todos = [];

    @action
    add(title, description){
        var todoModel = new TodoModel(title, description);
        this.todos.push(todoModel);
    }

    @computed
    get finishedCount() {
        return this.todos.filter(t =>t.finished).length;
    }    
}


export default TodoListModel;