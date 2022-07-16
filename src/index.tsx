import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <MoralisProvider serverUrl="https://2yt6qqu9bbig.usemoralis.com:2053/server" appId="glu0UxawhVFkrV6z3baLGmTM6578uZKBO51jJjkl">
      <App />
    </MoralisProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);