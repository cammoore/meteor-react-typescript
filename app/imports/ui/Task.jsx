"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tasks_js_1 = require("../api/tasks.js");
// Task component - represents a single todo item
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Task.prototype.toggleChecked = function () {
        tasks_js_1.Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked },
        });
    };
    Task.prototype.deleteThisTask = function () {
        tasks_js_1.Tasks.remove(this.props.task._id);
    };
    Task.prototype.render = function () {
        // give tasks a different className when they are checked off, so we can style them in CSS.
        var taskClassName = this.props.task.checked ? 'checked' : '';
        return (<li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>&times;</button>

                <input type="checkbox" readOnly checked={this.props.task.checked} onClick={this.toggleChecked.bind(this)}/>
                <span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
            </li>);
    };
    return Task;
}(React.Component));
exports.default = Task;
//# sourceMappingURL=Task.jsx.map