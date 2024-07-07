import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';  // Asegúrate de que la ruta sea correcta
import LogoutButton from '../components/LogoutButton';  // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  const { token } = useAuth();

  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            
            <li>
              <LogoutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
