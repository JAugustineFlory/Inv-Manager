import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Items from '../components/Items.tsx';

function Login() {
  const [LogSign, setLogSign] = useState(true);

  return (
    <>
      <h2>{LogSign ? 'Login' : 'Sign Up'}</h2>
      <hr />
      <div className="login-main">
        <div>
          <form action="" className="login item-card">
            <input type="email" name="email" placeholder="Enter Email Address" />
            <input type="password" name="password" placeholder="Enter Password" />
            {LogSign ? (
              <>
                
              </>
            ) : (
              <>
                <input type="text" name="name" placeholder="Name" />
                <input type="password" name="password-check" placeholder="Verify Password" />
              </>
            )}
            <button className="login-btn" type="submit">
              {LogSign ? 'Log In' : 'Create Account'}
            </button>
          </form>
          <p>{LogSign ? "Don't have an account?" : 'Already have an account?'}</p>
          <button type="button" onClick={() => setLogSign(!LogSign)}>
            {LogSign ? 'Sign up' : 'Log in'}
          </button>
        </div>
        <div className="info item-card">
          <ul>
            <li>Quickly</li>
            <li>View All global inventories</li>
            <li>Easy overv</li>
          </ul>
          <NavLink to="/items/all" element={<Items />}>View Catalog</NavLink>
        </div>
      </div>
    </>
  );
}

export default Login;
