import React, {Component} from 'react'
import Task from './Task'

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateArrayTasks: []
        }
    }

    addNewTask = () => {
        this.setState({
            updateArrayTasks: this.props.tasks.push(this.props.taskName)//<Task />
        });
    };

    render(){
        return (
            <div>
                <button className="addButton" onClick={this.addNewTask}>Add new task</button>
            </div>
        );
    }
}

export default AddTask;