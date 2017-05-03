import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import View = Blaze.View;

export default class AccountsUIWrapper extends React.Component<{}, {}> {
    view: View;

  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
    ReactDom.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view.
    Blaze.remove(this.view);
  }
  render() {
      // Just render a placeholder container that will be filled in
      return <span ref="container"></span>
  }
}