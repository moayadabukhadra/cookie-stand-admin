import LoginForm from './components/LoginForm';
import { useState,useEffect } from 'react';
import axios from 'axios';

import CookieStandAdmin from './components/CookieStandAdmin';

function Home() {

  const [token, settoken]= useState(null);
  const[userdata, setuserdata]= useState();

  const loginHandler = (e) => {
    e.preventDefault();

  const user={
    username: e.target.username.value,
    password: e.target.password.value
  }
  setuserdata(user);

  
  
  }
  console.log(userdata);
  
  function post(){

    setTimeout(() => {
      
    }, 500);

      axios.post('http://127.0.0.1:8000/api/token/', userdata)
      .then(res => {
        console.log(res.data);
        settoken(res.data);
      })
    
    
    
  
  useEffect(() => {
    post();
  }
  , [userdata]);

  


  }

  console.log(token);

    return(
      <>
      <CookieStandAdmin token={token}/>
      <LoginForm loginHandler={loginHandler}post={post}/>
      </>
    )


  
}
  export default Home;
// }

    
