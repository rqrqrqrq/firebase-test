import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

const LoginPage = ({ onLogin }) => {
  let loginNode, passNode;

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({
      login: loginNode.value,
      pass: passNode.value
    });
    event.target.reset();
  }

  return (
    <div>
      <h1>LOGIN PAGE REDNERED</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label>
          LOGIN:<br />
          <input type="text" ref={(node) => loginNode = node} />
        </label>
        <br />
        <label>
          PASS:<br />
          <input type="text" ref={(node) => passNode = node} />
        </label>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data))
})

export default connect(null, mapDispatchToProps)(LoginPage);
