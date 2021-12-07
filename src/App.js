import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Quara from './component/Quara';
import {logout,login, selectUser} from "./features/userSlice";
import Login from './component/auth/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoUPL,
          displayName: authUser.displayName,
          email: authUser.email
        }));
      console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
 }, [dispatch]);

  return (
    <div className="App">
      {
        user ? (<Quara />) : (<Login />)
        // <Quara />
        // <Login />
      }
      
          </div>
  );
}

export default App;
