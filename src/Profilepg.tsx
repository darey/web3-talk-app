import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import {UPDATEPROFILE,GETUSERPROFILE} from "./constant";
import axios from 'axios';




function Profilepg() {




  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();




    const [names , setNames] = useState("");
    const [usdtWalletAddress, setWalletUsdtWalletAddress] = useState("");

    const [mynames , setMynames] =  useState("");
    const [mywalletaddress , setMywalletaddress] =  useState("");



    const updateNames = (event: React.ChangeEvent<HTMLInputElement>) => {

      setNames(event.target.value);

    };


    const updateUsdtWalletAddress = (event: React.ChangeEvent<HTMLInputElement>) => {

      setWalletUsdtWalletAddress(event.target.value);

    };





  useEffect(() => {
    getProfile();
  });





     


    async function getProfile(){

      await axios.post(GETUSERPROFILE, {
        objectId: user?.id ,
        walletaddress: user!.get("ethAddress")
      } ).then(data=>{

        let getdata = data.data.result ;

          console.log(getdata);

          setMynames(getdata.names) ; setMywalletaddress(getdata.usdtWalletAddress);



      }).catch(err =>{ alert(err);});


     }









     function updateProfile(){


      axios.post(UPDATEPROFILE, {
        names : names ,
        usdtWalletAddress : usdtWalletAddress,
        objectId: user?.id ,
        user:user,
        walletaddress: user!.get("ethAddress") 
      } ).then(data=>{

  alert(data.data.result); window.location.reload();

      }).catch(err =>{ alert(err);});


     }
   

    

  return (
    <div>
     <h1>Web3 Talk</h1>

     <br />
     <a href="/">Home</a>


     <br /><br />

      <h3>Profile Page</h3>


      <p>Name : {mynames} </p>
      <p>Wallet Address(Usdt): {mywalletaddress}</p>
    
     

     <br /><br />
     
<h5>Update Profile Info</h5>
  <label>USDT Wallet Address :: </label>

  <input type="text" value={usdtWalletAddress} onChange={updateUsdtWalletAddress} />

  <br /><br />

<label>Full Names :: </label>

<input type="text" value={names} onChange={updateNames} />

<br /><br />


      
<button  onClick={updateProfile}>Submit</button>

      



    </div>
  );



  



}






export default Profilepg;