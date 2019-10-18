import React, {Component} from 'react'
import Task from './Task'
import AddTask from './AddTask'

class ToDoList extends Component {
    constructor(props, ...tasks) {
        super(props, ...tasks);
        this.state = {
            tasks: tasks,
            text: '',
        }
    }

    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <ul>
                    {this.state.tasks.map(task => (
                        <li key={task.id}>{task.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDoList;