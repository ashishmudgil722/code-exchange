import React ,{useState} from 'react';
import './Login.css';
import { auth , provider } from "../../firebase";
import { ArrowForwardIosIcon } from '@material-ui/icons/ArrowForwardIos';


// const [email , setEmail] = useState("");
//         const [password, setPassword] = useState("");

//         const signIn = () => {
//             auth.signInWithPopup(provider).catch((e) => alert(e.message));

//             console.log(auth);
//         };
//         const handleLogin = (e) => {
//             e.preventDefault();
//             auth.signInWithEmailAndPassword(email,password).then((auth) => {
//                 console.log(auth);
//             }).catch((e) => alert(e.message));
//             setEmail("");
//             setPassword("");
//         };
//         const handleRegister = (e) => {
//             e.preventDefault();
//             auth.createUserWithEmailAndPassword(email,password).then((auth) => {

//                 if(auth){
//                     console.log(auth);
//                 }
//             }).catch((e) => alert(e.message));

//             setEmail("");
//             setPassword("");
//         };

function Login() {
    return (
        <div className = "login">
            <div className="login__container">
                <div className = "login__logo">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png" alt="xyz" />
                </div>
                <div className="login__desc">
                    <p>A Place to Share Knowledge and better understand the world</p>
                    <p style = {{ color: "royalblue" , fontSize: "25px" }}>
                        HandCrafted with heart
                    </p>
                    <h3>code-Excange App</h3>
                </div>
                <div className="login__auth1">
                    <div className="login__auth1Options">
                        <div className="login__auth1Option">
                            <img className ="login__googleauth1" src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" alt="xyz" />
                            <p>Continue with Google</p>
                        </div>
                        <div className="login__auth1Option">
                            <img className ="login__googleauth1" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="xyz" />
                            <span>Continue with Facebook</span>
                        </div>
                        <div className="login__auth1Desc">
                            <p>
                                <span style= {{ color:"blue" , cursor : "pointer"}}>Sign Up with Email</span>
                                . By continuing you indicate that you have read and agree to code-Exchange's 
                                <span style={{color: "blue" , cursor: "pointer"}}>Terms of Services</span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="login__emailPass">
                        <div className="login__label">
                            <h4>Login</h4>
                        </div>
                        <div className="login__inputFields">
                            <div className="login__inputField">
                                <input
                                type="text" placeholder="Email" />
                            </div>
                            <div className="login__inputField">
                            <input
                            type="password" placeholder="Password" />
                        </div>
                        </div>
                        <div className="login__forgButt">
                            <small>Forgot Password?</small>
                            <button type = "submit">Login</button>
                        </div>
                        <button>Register</button>
                    </div>
                </div>
                <div className="login__lang">
                    <p>Hindi</p>
                    <ArrowForwardIosIcon fontSize="small" />
                </div>
                <div className="login__footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Bussiness</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; code-Exchange Fake Inc. 2021</p>
                </div>
            </div>
        </div>
    );
}

export default Login;