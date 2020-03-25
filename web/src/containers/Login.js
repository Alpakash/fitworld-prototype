import React, { useState } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = () => {
    login
      ? axios.post('https://fitworld.io/auth/usrpwd/login', {
        "email": email,
        "password": password
      })
        .then(r => console.log(r))
        .catch(err => console.log(err))

      : axios.post('https://fitworld.io/auth/usrpwd/register', {
    "email": email,
    "password": password
  }, {
    headers: {
      'Access-Control-Allow-Headers': '*'
    }
  })
    .then(r => console.log(r))
    .catch(err => console.log(err));
  }

    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => setEmail( e.target.value )}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value )}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => register()}>
            {login ? 'login' : 'create account'}
          </div>
          <div
            className="pointer button"
            onClick={() => setLogin(!login )}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
}

let _confirm = async () => {
  // ... you'll implement this 🔜
}

let _saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token)
}

export default Login
