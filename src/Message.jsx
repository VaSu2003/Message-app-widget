import React,{useState} from 'react'

function Message({message}) {

  const [child,setChild] = useState(message)
  console.log(message)

  function addReply(id){
    document.getElementById('text').focus()
    let submitReply = document.createElement('button')
    submitReply.textContent = "Submit Reply"
    submitReply.id = id
    submitReply.onclick = (replyHandler)
    document.getElementById(id).appendChild(submitReply)
  }

  function replyHandler(e){
    let newMessage = message.children.push({id:message.id + 0.1 , text:document.getElementById('text').value, children:[]})
    document.getElementById('text').value = ''
    console.log(message)
    setChild(newMessage)
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