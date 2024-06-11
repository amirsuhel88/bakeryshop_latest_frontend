import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context.js/AuthContext'; // Import the authentication context
import { logout } from '../Redux/reducers/userSlice'; // Import the logout thunk

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout: authLogout } = useAuth(); // Access logout function from context

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        // Call logout function from the auth context if needed
        authLogout();
        // Redirect to login page
        navigate('/');
      })
      .catch((err) => console.log('Logout failed', err));
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
