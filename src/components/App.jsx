import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { logout } from '../actions/userActions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <IndexLink to="/" activeStyle={{color: 'red'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="secret" activeStyle={{color: 'red'}}>Secret</Link>
            </li>
            <li>
              <a href="#" onClick={onLogout}>LOGOOT</a>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(App);
