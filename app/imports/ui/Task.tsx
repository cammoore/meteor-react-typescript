import * as React from 'react';
import {Tasks} from '../api/tasks.js';

interface TaskText {
    _id: string;
    checked: boolean;
    text: string;
    createdAt: object;
    owner: object;
    username: string;
}

interface TaskProps {
    task: TaskText;
}

// Task component - represents a single todo item
export default class Task extends React.Component<TaskProps, {}> {
    toggleChecked() {
        Tasks.update(this.props.task._id, {
            $set: {checked: !this.props.task.checked},
        });
    }

    deleteThisTask() {
        Tasks.remove(this.props.task._id);
    }

    render() {
        // give tasks a different className when they are checked off, so we can style them in CSS.
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>&times;</button>

                <input
                    type="checkbox"
                    readOnly
                    checked={this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}
                />
                <span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
            </li>
        );
    }
}
