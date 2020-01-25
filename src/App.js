import React, { useState, useEffect } from 'react';
import './App.css'

const OthersMessage = ({ sender, text, datetime }) => {
  return (
    <div className='othersMessage'>
      <div className='sender'>
        {sender}
      </div>
      <div className='text'>
        {text}
      </div>
      <div className='time'>
        {datetime}
      </div>
    </div>
  )
}

const OwnMessage = ({ sender, text, datetime }) => {
  return (
    <div className='ownMessage'>
      <div className='sender'>
        {sender}
      </div>
      <div className='text'>
        {text}
      </div>
      <div className='time'>
        {datetime}
      </div>
    </div>
  )
}

function App() {
  const [ messages, setMessages ] = useState([
    {
      sender: 'John',
      text: 'Hi',
      datetime: Date().toString(),
    }
  ])
  const [ text, setText ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages([
      ...messages,
      {
        sender: 'Me',
        text,
        datetime: Date().toString(),
      }
    ])
    setText('')
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        ...messages,
        {
          sender: 'John',
          text: 'How r you?',
          datetime: Date().toString(),
        }
      ])
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='layout'>
      <div className='chatBox'>
        {messages.map(message => (
          <div className='messageRow'>
            {message.sender.toLowerCase() !== 'me' ?
              <OthersMessage {...message} />
              : 
              <OwnMessage {...message} />
            }
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Type message here..'
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default App;
