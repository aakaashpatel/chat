import React, { useEffect, useState } from 'react'
import {user} from '../Join/Join';
import socketIo, { Socket } from "socket.io-client";
import "./Chat.css";
import sendlogo from "../../image/send.png";

let socket;

const ENDPOINT = "http://localhost:4500/";


const Chat = () => {
     const [id, setid] = useState("")
     const send = () =>{
        const message = document.getElementById('chatInput').value;
        socket.emit('message',{message});
        document.getElementById('chatInput').value="";
     }
    
    useEffect(() => {
     socket = socketIo(ENDPOINT, { transports : ['websocket']});
  socket.on('connect', () =>{
      alert("connected");
      setid(socket.id)
  })
  socket.emit('joined',{user})

  socket.on('welcome',data =>{
    console.log(data.user,data.message)
  })

  socket.on('userJoined',data =>{
    console.log(data.user,data.message)
  })

  return () => { 
      socket.off('disconnect');
      socket.off();

  }
}, [])
 
  useEffect(() => {
    socket.on('sendMessage',(data) =>{
       console.log(data.user,data.message,data.id);
    })
  
    return () => {
      
    }
  }, [])
   


  return (
   <div className="chatPage">
    <div className="chatContainer">
      <div className="header"></div>
        <div className="chatBox"></div>
            <div className="inputBox">
               <input type="text" id="chatInput" />
               <button onClick={send} className='sendBtn'><img src={sendlogo} alt="send" /></button>
            </div>
        
      
    </div>
   </div>
  )
}

export default Chat