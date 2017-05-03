import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
    ReactDom.render(<App />, document.getElementById('render-target'));
});
