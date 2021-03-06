"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var meteor_1 = require("meteor/meteor");
require("../imports/startup/accounts-config.js");
var App_jsx_1 = require("../imports/ui/App.jsx");
meteor_1.Meteor.startup(function () {
    ReactDom.render(<App_jsx_1.default />, document.getElementById('render-target'));
});
//# sourceMappingURL=main.jsx.map