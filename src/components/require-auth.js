
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  const mapDispatchToProps = (state, action) => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapDispatchToProps, null)(RequireAuth);
}
