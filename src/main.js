import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import HelloHandler from './components/hello.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/hello" className="hellolink">hello</Link>
        {this.props.children}
      </div>
    );
  }
});


render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={HelloHandler} />
    </Route>
  </Router>), document.getElementById('content'));

