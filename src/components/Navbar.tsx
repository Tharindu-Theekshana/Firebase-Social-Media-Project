import { Link } from "react-router-dom"
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import './Navbar.css';

export default function Navbar() {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
      await signOut(auth);
    }

  return (
   

    <div className="navbar">
      <Link to={"/"}>
        <button className="nav-button">Home</button>
      </Link>
      <Link to={"/login"}>
        <button className="nav-button">Login</button>
      </Link>

      {user && (
        <div className="user-info">
          <p className="user-name">{user?.displayName}</p>
          <img className="user-avatar" src={user?.photoURL || ""} alt="User" />
          <button className="logout-button" onClick={signUserOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}
