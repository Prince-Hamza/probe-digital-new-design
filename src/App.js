import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './Context'
import { useEffect, useState } from 'react'
import NetEvents from './screens/NetEvents/NetEvents'
import Main from './screens/Home/Main/Main'
import About from './screens/About/About'
import Services from './screens/Services/Services'
import Pricing from './screens/Pricing/Pricing'
import Contact from './screens/Contact/Contact'
import Login from './screens/Login/Login'
import Dashboard from './screens/Dashboard/variation1/Dashboard'
import DashboardV2 from './screens/Dashboard/variation2/DashboardV2'
import DashboardV3 from './screens/Dashboard/variation3/DashboardV3'
import DashboardV4 from './screens/Dashboard/variation4/DashboardV4'
import DashboardV5 from './screens/Dashboard/variation5/DashboardV5'
import PostBlogs from './screens/Blogs/Post/PostBlogs'
import firebase from 'firebase/compat/app'
import {config} from './config'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {

  const [appData, setAppData] = useState({ userInfo: {}, groups: [], selectedGroup: {}, sideBarExpanded: true })  
  if (!firebase.apps.length) firebase.initializeApp(config)

  return (
    <AppContext.Provider value={{ appInfo: appData, setAppInfo: setAppData }}>
      <NetEvents>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/dashboard/v1" element={<Dashboard />} />
            <Route exact path="/dashboard/v2" element={<DashboardV2 />} />
            <Route exact path="/dashboard/v3" element={<DashboardV3 />} />
            <Route exact path="/dashboard/v4" element={<DashboardV4 />} />
            <Route exact path="/dashboard/v5" element={<DashboardV5 />} />


            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blogs/post" element={<PostBlogs />} />

          </Routes>
        </BrowserRouter>
      </NetEvents>
    </AppContext.Provider>
  )
}

export default App

