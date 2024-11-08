import React, { useEffect} from 'react';
import { signOut } from 'firebase/auth'; // signOut function ko import karo
import { auth } from './firebaseConfig'; // Apne config se auth instance import karo
import { useNavigate } from 'react-router-dom'; // Redirect ke liye useNavigate


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // signOut(auth) user ko logout karega
      alert('Logged out successfully!');
      navigate('/login'); // Logout ke baad login page par bhejega
    } catch (error) {
      alert('Error logging out: ' + error.message);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
