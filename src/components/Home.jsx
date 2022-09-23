import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginStart, loginSuccess, logout} from "../features/UserSlice.js";

function Home(){

   const dispatch = useDispatch();
   const {currentUser} = useSelector(state => state.user)

   const [username, setUsername] = useState("");
   useEffect(()=> {
      dispatch(loginStart())
   }, [])

   return (
    <div className="home">
       <form action="#">
             <input type="text" 
             placeholder="Your username"
             onChange={(event)=> {
                const username = event.target.value;
                setUsername(username)
             }} />
       </form>

       <div>
       <button onClick={(event)=> {
          dispatch(loginSuccess({name: username}))
       }}>Login</button>

      <button onClick={(event)=> {
          dispatch(logout())
       }}>Logout</button>
       </div>
       
       <h2>{currentUser ? `You are logged in, ${currentUser.name}.` : "No auth. Please login."}</h2>
    </div>
   );

};

export default Home;