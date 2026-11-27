


function Login(logged=false) {
  
  const LogSign = true;

  return (
    <>
      <h2>Login</h2>
      <hr />
      <div className="login-main">
        <form action="" className="login item-card">
          {LogSign ? (
            <>
              <input type="email" name="email" placeholder="Enter Email Address" />
              <input type="password" name="password" placeholder="Enter Password" />
            </>
          ) : (
            <>
              <input type="text" name="name" placeholder="Enter Name" />
            </>
          )}
          <button className="login-btn" type="submit">
            {LogSign ? ('Log In') : ('Create Account')}
          </button>
        </form>
        <div className="info item-card">
          <ul>
            <li>Quickly</li>
            <li>View All global inventories</li>
            <li>Easy overv</li>
          </ul>
        </div>
      </div>
    </>
  )
}



export default Login