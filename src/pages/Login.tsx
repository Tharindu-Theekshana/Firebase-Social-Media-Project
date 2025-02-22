import {auth,provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

export default function Login() {

    
    
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
       const result = await signInWithPopup(auth,provider);
       console.log(result);
       navigate("/");
       
    }

  return (
    

    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <button className="google-button" onClick={signInWithGoogle}>
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="google-icon"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
