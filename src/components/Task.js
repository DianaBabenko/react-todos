import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        }
    }

    handleChange(e) {
        this.setState({ taskName: e.target.value});
    }

    render() {
        return (
            <div>
                <label htmlFor="newTask">Create task: </label>
                <input id="newTask" type="text" placeholder="task" onChange={this.handleChange}/>
            </div>
        );
    }
}
export default Task;