"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var meteor_1 = require("meteor/meteor");
var App_js_1 = require("../imports/ui/App.js");
meteor_1.Meteor.startup(function () {
    ReactDom.render(React.createElement(App_js_1.default, null), document.getElementById('render-target'));
});
//# sourceMappingURL=main.js.map