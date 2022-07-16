import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";




function Homepg() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    let isMember = "block";
    let isNotMember = "none";

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here

      

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const newReport  = async () => { } 

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {

              if(user!.get("ismember")){ console.log("member authentication successfull"); }
              else{  logout(); alert("this wallet address is not an authorised member of web3 talk!"); }

            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <div>
      <h1 style={{display:isMember }}>Web3 Talk</h1>


      <br /><br />    <br /><br />  
    

      { isAuthenticated ? <span> <a href="/">Home</a> <a href="profile">Profile</a>  <a href="report">Reports</a> <a href="payment">Payments</a>  <button onClick={logOut} disabled={isAuthenticating}>Logout</button>     <br /><br /><p> Metamask Adress : {user!.get("ethAddress")}</p></span> : <button onClick={login}>Metamask Login</button> }



    </div>
  );
}






export default Homepg;