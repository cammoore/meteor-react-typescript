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
var templating_1 = require("meteor/templating");
var blaze_1 = require("meteor/blaze");
var AccountsUIWrapper = (function (_super) {
    __extends(AccountsUIWrapper, _super);
    function AccountsUIWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountsUIWrapper.prototype.componentDidMount = function () {
        // Use Meteor Blaze to render login buttons
        this.view = blaze_1.Blaze.render(templating_1.Template.loginButtons, ReactDom.findDOMNode(this.refs.container));
    };
    AccountsUIWrapper.prototype.componentWillUnmount = function () {
        // Clean up Blaze view.
        blaze_1.Blaze.remove(this.view);
    };
    AccountsUIWrapper.prototype.render = function () {
        // Just render a placeholder container that will be filled in
        return <span ref="container"></span>;
    };
    return AccountsUIWrapper;
}(React.Component));
exports.default = AccountsUIWrapper;
//# sourceMappingURL=AccountsUIWrapper.jsx.map