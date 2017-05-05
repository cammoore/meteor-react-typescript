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
var ReactDom = require("react-dom");
var meteor_1 = require("meteor/meteor");
var react_meteor_data_1 = require("meteor/react-meteor-data");
var tasks_js_1 = require("../api/tasks.js");
var Task_jsx_1 = require("./Task.jsx");
var AccountsUIWrapper_jsx_1 = require("./AccountsUIWrapper.jsx");
// App component - represents the whole app
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hideCompleted: false,
        };
        return _this;
    }
    App.prototype.handleSubmit = function (event) {
        event.preventDefault();
        // Find the text field via the React ref
        var text = ReactDom.findDOMNode(this.refs.textInput).value.trim();
        tasks_js_1.Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: meteor_1.Meteor.userId(),
            username: meteor_1.Meteor.user().username,
        });
        // Clear form
        ReactDom.findDOMNode(this.refs.textInput).value = '';
    };
    App.prototype.toggleHideCompleted = function () {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    };
    App.prototype.renderTasks = function () {
        var filteredTasks = this.props.tasks;
        if (this.state.hideCompleted) {
            filteredTasks = filteredTasks.filter(function (task) { return !task.checked; });
        }
        return filteredTasks.map(function (task) { return (<Task_jsx_1.default key={task._id} task={task}/>); });
    };
    App.prototype.render = function () {
        return (<div className="container">
                <header>
                    <h1>Todo List ({this.props.incompleteCount})</h1>

                    <label className="hide-completed">
                        <input type="checkbox" readOnly checked={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)}/>
                        Hide Completed Tasks
                    </label>

                    <AccountsUIWrapper_jsx_1.default />

                    {this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
                        </form> : ''}
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>);
    };
    return App;
}(React.Component));
exports.default = react_meteor_data_1.createContainer(function () {
    return {
        tasks: tasks_js_1.Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: tasks_js_1.Tasks.find({ checked: { $ne: true } }).count(),
        currentUser: meteor_1.Meteor.user(),
    };
}, App);
//# sourceMappingURL=App.jsx.map