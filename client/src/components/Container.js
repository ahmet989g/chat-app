import { useEffect } from 'react'

import ChatFrom from './ChatFrom'
import ChatList from './ChatList'
import { useChat } from '../context/ChatContext';

import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
/*
    subscribeInitialMessages((message) => {
      setMessages(message)
    })
*/
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, {message}])
    });
  }, []);

  return (
    <div className='app'>
        <ChatList />
        <ChatFrom/>
    </div>
  )
}

export default Container;