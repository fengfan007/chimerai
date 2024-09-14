import React from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Router,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import Deisgn from './pages/Deisgn'
import Assist from './pages/Assist'
import Order from './pages/Order'
import Profile from './pages/Profile'
import ErrorPage from "./error-page";
import './App.less'

const Bottom = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/deisgn',
      title: 'Deisgn',
      icon: <AppOutline />,
    },
    {
      key: '/assist',
      title: 'Assist',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/order',
      title: 'Order',
      icon: <MessageOutline />,
    },
    {
      key: '/profile',
      title: 'Profile',
      icon: <UserOutline />,
    },
  ]
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}
function App() {
  return (
      <div className="app">
        <div className="body">
          <Routes>
            <Route exact path='/deisgn' element={<Deisgn/>} />
            <Route exact path='/assist' element={<Assist/>} />
            <Route exact path='/order' element={<Order/>} />
            <Route exact path='/profile' element={<Profile/>} />
          </Routes>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
  )
}

export default App
