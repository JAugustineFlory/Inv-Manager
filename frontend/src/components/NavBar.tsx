import { NavLink } from 'react-router-dom';
import defaultProfile from '../assets/defaultprofile.png';

class User {
  name: string;
  icon: string;

  constructor(name = '', icon = defaultProfile) {
    this.name = name;
    this.icon = icon;
  }
};

function NavBar() {
  const user = new User();
  
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
              <NavLink to={`/items/myInventory`}>My Items</NavLink>
            </>
        )}
        <NavLink to="/AllItemsGlobal">All Items Globally</NavLink>
      </div>
    </>
  )
};

export default NavBar;