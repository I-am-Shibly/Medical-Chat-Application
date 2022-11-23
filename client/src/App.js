import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css'

import { ChannelContainer, ChannelListContainer, Auth } from './components'

const cookies = new Cookies()

const apiKey = 'pe8xen29kydm'

const authToken = cookies.get('token')

const client = StreamChat.getInstance(apiKey)

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

function App() {
  if (!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer

        />

        <ChannelContainer

        />

      </Chat>
    </div>
  )
}

export default App