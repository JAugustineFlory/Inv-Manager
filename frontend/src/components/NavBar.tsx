import { NavLink } from 'react-router-dom';

class User {
  name: string;
  icon: string;

  constructor(name = '', icon = '../assets/defaultprofile.png') {
    this.name = name;
    this.icon = icon;
  }
};

const user = new User('Jerry');

function NavBar() {
  return (
    <>
      <h1>Inv-Manager</h1>
      <div className="profile">
        {!user ? (
            <div className="icon-pill">Log in</div>
          ) : (
            <>
              <div className="icon-pill">
                <img src={user.icon} alt="profile icon" />
              </div>
              <NavLink to={`/items/${user.name}`}>My Items</NavLink>
            </>
        )}
        <NavLink to="/AllItemsGlobal">All Items Globally</NavLink>
      </div>
    </>
  )
};

export default NavBar;