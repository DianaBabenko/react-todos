import React, {Component} from 'react'
import ToDoList from './ToDoList'
import AddTask from "./AddTask"
import Task from './Task'

class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }

  render() {
    return (
        <div>
            <Task />
            <AddTask tasks={this.state.tasks}/>
            <ToDoList />
        </div>
    );
  }
}

export default ToDoApp;
