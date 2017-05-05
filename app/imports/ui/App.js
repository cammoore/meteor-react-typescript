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
var react_meteor_data_1 = require("meteor/react-meteor-data");
var tasks_js_1 = require("../api/tasks.js");
var Task_js_1 = require("./Task.js");
// App component - represents the whole app
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.renderTasks = function () {
        return this.props.tasks.map(function (task) { return (React.createElement(Task_js_1.default, { key: task._id, task: task })); });
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("header", null,
                React.createElement("h1", null, "Todo List")),
            React.createElement("ul", null, this.renderTasks())));
    };
    return App;
}(React.Component));
exports.default = react_meteor_data_1.createContainer(function () {
    return {
        tasks: tasks_js_1.Tasks.find({}).fetch(),
    };
}, App);
//# sourceMappingURL=App.js.map