import { observable } from "mobx";

class TodoModel{
    id = Math.random();
    @observable title;
    @observable description;
    @observable finished;

    constructor(title, description){
        this.title = title;
        this.description = description;
    }

}

export default TodoModel;