import React, { useEffect } from 'react'
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
import Deisgn from '@/pages/Deisgn'
import Assist from '@/pages/Assist'
import Order from '@/pages/Order'
import Profile from '@/pages/Profile'
import ErrorPage from "@/error-page";
import '@/App.less'
import design from '@/assets/design.png'
import design2 from '@/assets/design2.png'

import assist from '@/assets/assist.png'
import assist2 from '@/assets/assist2.png'
import order from '@/assets/order.png'
import order2 from '@/assets/order2.png'
import profile from '@/assets/profile.png'
import profile2 from '@/assets/profile2.png'

const Bottom = ()=>{

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  useEffect(()=>{
    console.log(pathname)
    if(pathname == '' || pathname == '/' || pathname == '/chimerai/'){
      navigate('/deisgn')
    }
    // navigate('/deisgn')
  })
  

  const setRouteActive = (value) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/deisgn',
      title: 'Deisgn',
      icon: (active)=>{
        return <div><img style={{width:'1.8rem'}} src={active ? design:design2}/></div>
      },
    },
    {
      key: '/assist',
      title: 'Assist',
      icon: (active)=>{
        return <div><img style={{width:'1.8rem'}} src={active ? assist2:assist}/></div>
      },
    },
    {
      key: '/order',
      title: 'Order',
      icon: (active)=>{
        return <div><img style={{width:'1.8rem'}} src={active ? order2:order}/></div>
      },
    },
    {
      key: '/profile',
      title: 'Profile',
      icon: (active)=>{
        return <div><img style={{width:'1.8rem'}} src={active ? profile2:profile}/></div>
      },
    },
  ]
  return (
    <TabBar style={{padding:'10px 0'}} safeArea defaultActiveKey="/deisgn" activeKey={pathname} onChange={value => setRouteActive(value)}>
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
