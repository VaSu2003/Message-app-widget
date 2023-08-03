import React, { useState } from 'react'
import Message from './Message'


function InputContainer() {

  const [messages,setMessages] = useState([{
    id: 1,
    text: 'Top-level comment 1',
    children: [
      {
        id: 2,
        text: 'Reply to comment 1',
        children: [
          {
            id: 3,
            text: 'Reply to reply',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: 'Top-level comment 2',
    children: [],
  },]) 

  let [count,setCount] = useState(0)

  function submitPost(){
      // console.log("clicked");

      setCount(count += 1)
      messages.push({messageText: document.getElementById('text').value, id: count})
      setMessages([...messages])
      document.getElementById('text').value = ""
      console.log(messages)
  
  }

  

  return (
    <div className="main">
        <div className="message_input">
            <input type="text" name="text" id="text" />
        </div>
        <button onClick={submitPost}>Post</button>
        <div className="messages_container">
          {/* {messages.map((message)=>{
            return (<div key = {message.id} id = {message.id}>
            <li>{message.messageText}HI</li>
            <button onClick={()=>{
              addReply(message.id)}}>Reply</button>
            </div>
            )
          })} */}

          {messages.map((message)=>{
            return <Message key = {message.id} message = {message} />
          })}
        </div>
    </div>
  )
}

export default InputContainer