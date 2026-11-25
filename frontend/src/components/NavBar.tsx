import { NavLink } from 'react-router-dom';
import defaultProfile from '../assets/defaultprofile.png';

type AuthUser = {
  id: number;
  name: string;
  icon?: string;
};

type NavBarProps = {
  user: AuthUser | null;
};


function NavBar({ user }: NavBarProps) {

  
  return (
    <>
      <h1>Inv-Manager</h1>
      <div className="profile">
        {!user ? (
            <button className="icon-pill">Log in</button>
          ) : (
            <>
              <div className="icon-pill">
                <img src={user.icon ?? defaultProfile} alt="profile icon" />
              </div>
              <NavLink to={`/items/myInventory`}>My Inventory</NavLink>
            </>
        )}
        <NavLink to="/AllInventories">All Inventories</NavLink>
      </div>
    </>
  )
};

export default NavBar;