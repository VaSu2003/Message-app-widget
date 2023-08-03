import React, { useState } from 'react'


function InputContainer() {

  const [messages,setMessages] = useState([]) 

  let [count,setCount] = useState(0)

  function submitPost(){
      console.log("clicked");
      count = count + 1;
      setCount([count])
      messages.push({messageText: document.getElementById('text').value, id:count})
      setMessages([...messages])
      document.getElementById('text').value = ""
      console.log(messages)
  
  }

  function addReply(id){
    count = count + 1;
    setCount([count])
    console.log(messages.filter((message)=>message.id === id))
  }

  return (
    <div className="main">
        <div className="message_input">
            <input type="text" name="text" id="text" />
        </div>
        <button onClick={submitPost}>Post</button>
        <div className="messages_container">
          {messages.map((message)=>{
            return (<div key = {message.id}>
            <li>{message.messageText}HI</li>
            <button onClick={()=>{
              addReply(message.id)}}>Reply</button>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default InputContainer