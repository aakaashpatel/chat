// import socketIO from "socket.io-client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

// const ENDPOINT = 'http://localhost:4500/'
// const socket =socketIO(ENDPOINT ,{ transports :['websocket']});

function App() {

  return (
   <div className="App">
      
      <BrowserRouter>
        <Routes> 
          <Route exact path="/" Component={Join} />
          <Route path="/chat"  Component={Chat}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
