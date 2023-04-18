import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './Context'
import { useState } from 'react'
import NetEvents from './screens/NetEvents/NetEvents'
import Main from './screens/Home/Main/Main'
import About from './screens/About/About'
import Services from './screens/Services/Services'
import Pricing from './screens/Pricing/Pricing'
import Contact from './screens/Contact/Contact'
import Login from './screens/Login/Login'
import Dashboard from './screens/Dashboard/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  const [appData, setAppData] = useState({ userInfo: {}, groups: [], selectedGroup: {}, sideBarExpanded: true })

  return (
    <AppContext.Provider value={{ appInfo: appData, setAppInfo: setAppData }}>
      <NetEvents>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </NetEvents>
    </AppContext.Provider>
  )
}

export default App
