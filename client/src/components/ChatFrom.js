import {useState} from 'react'

import styles from './styles.module.css';
import { sendMessage } from '../socketApi'
import { useChat } from '../context/ChatContext';

function ChatFrom() {
  const [message, setMessage] = useState('');

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Mesajımı backende gönder
    setMessages((prevState) => [...prevState, { message, fromMe:true }]);
    sendMessage(message);

    //Mesajımı temizle 
    setMessage('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  )
}

export default ChatFrom
