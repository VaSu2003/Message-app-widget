import React from 'react'

function Message({message}) {
  console.log(message)

  function addReply(id){
    document.getElementById('text').focus()
    let submitReply = document.createElement('button')
    submitReply.textContent = "Submit Reply"
    document.getElementById(id).appendChild(submitReply)
  }

  return (
    <>
      <div id={message.id}>
        <div className="message-text">{message.text}</div>
        <button onClick={()=>{addReply(message.id)}}>Reply</button>
      </div>
      {message.children && message.children.map((child)=>{
        return <Message className = 'child'  key = {child.id} message = {child}/>
      })}
    </>
  )
}

export default Message