import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import {SENDREPORTS,GETREPORTS} from "./constant";
import axios from 'axios';





function Reportpg() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    //const [setCount] = useState("hello fifty four");



    

    const [topic , setTopic] = useState("");
    const [reportDetails, setReportDetails] = useState("");

    const [reportData , setReportData] = useState([{walletAddress: '23454', topic: 'Loading...', reportDetails: 'Loading...', createdAt: '2022-07-12T12:13:42.987Z', updatedAt: '2022-07-12T12:13:42.987Z'}]);


    //const numbers = [1, 2, 3, 4, 5];

const listItems = reportData.map((data) =>
  <li key={data.updatedAt}>TITLE : {data.topic}
  
  <p>MESSAGE : {data.reportDetails}</p>



<p><hr /></p>

  
  </li>
);


    //function newReport(event){ alert(event.target.value);  }

   
    const newTopic = (event: React.ChangeEvent<HTMLInputElement>) => {

      setTopic(event.target.value);

    };



    const newReportDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

      setReportDetails(event.target.value);

    };






  useEffect(() => {
    getReport();
  });

     


    async function getReport(){

      await axios.get(GETREPORTS).then(data=>{

        let getdata = data.data.result ;

          console.log(getdata); setReportData(getdata);

         // setMynames(getdata.names) ; setMywalletaddress(getdata.usdtWalletAddress);



      }).catch(err =>{ alert(err);});


     }






    function submitReport() {  

      

                    axios.post(SENDREPORTS, {
                      topic : topic ,
                      reportDetails : reportDetails,
                      walletaddress: user!.get("ethAddress") 
                    } ).then(data=>{

               // alert(data.data.result);

                    }).catch(err =>{ alert(err);});



    
    
    }





    let isMember = "block";
    let isNotMember = "none";

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here

      

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  

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
    
      
      <br />
     <a href="/">Home</a>


     <br /><br />

  <label>Subject :: </label>

  <input type="text" value={topic} onChange={newTopic} />

  <br /><br />

<label>Report Details :: </label>

  <textarea value={reportDetails} onChange={newReportDetails} />
      
  <br /><br />
      
<button  onClick={submitReport}>Submit Report</button>

      
<br /><br /><br />



<hr />


<br /><br /><br />


<ul>{listItems}</ul>


    </div>
  );





}






export default Reportpg;