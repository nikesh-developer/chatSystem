import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter , Routes ,Route, Navigate} from 'react-router-dom'
import { Profile, Chat, Auth } from './filedetails';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='*' element={<Navigate to="/auth" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App