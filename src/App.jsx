import { useState } from 'react'
import Main from './screens/Main/Main'
import './App.css'
import { Col, Form, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './Context'

function App() {

  const [appInfo, setAppInfo] = useState({ loggedIn: false, count: 0 })

  return (
    <AppContext.Provider value={{ appInfo: appInfo, setAppInfo: setAppInfo }} >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
