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
    <nav>
      <NavLink to={'/'}><h1 className="logo btn">Inv-Manager</h1></NavLink>
      <div className="profile">
        {!user ? (
          <>
            <NavLink to={'/login'} className="btn icon-pill">Log in</NavLink>
            <NavLink to={'/items/all'}><p className="btn">All Inventories</p></NavLink>
          </>
        ) : (
          <>
            <div className="icon-pill">
              <img src={user.icon ?? defaultProfile} alt="profile icon" />
            </div>
            <div className="view-btn">
              <NavLink to={`/items/myInventory`}><p className="btn">My Inventory</p></NavLink>
              <NavLink to={'/items/all'}><p className="btn">All Inventories</p></NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  )
};

export default NavBar;