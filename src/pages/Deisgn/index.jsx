import React from 'react'
import { Button, Grid, Space } from 'antd-mobile'
import { RedoOutline, HeartOutline,RightOutline } from 'antd-mobile-icons'
import Waterfall from '../../components/Waterfall'
import frameImage from '../../assets/Frame.png'
import {
    Routes,
    Route,
    Link,
    NavLink,
    Navigate,
    useNavigate,
  } from "react-router-dom";
import './index.less'
export default () => {
    const navigate = useNavigate();
  return (
    <div className="deisgn-box">
        <header>
            <div className='title'>
                <span>CHIMER AI</span>
                <span style={{float: 'right'}}>
                    <Space>
                        <RedoOutline /><HeartOutline />
                    </Space>
                </span>
            </div>
            <button className='btn' onClick={()=>navigate("/generate")}>Upload Inspiration <img className='png' src={frameImage}/></button>
        </header>
       
        <main>
            <div className='title'>
                <span className='text'>Moodboard</span>
                <span style={{float: 'right'}}>
                    <div className='dressBtn'>
                        <Space>
                            <span>Dress</span>
                            <RightOutline fontSize={10}/>
                        </Space>
                    </div>
                </span>
            </div>
            <Waterfall/>
        </main>
    </div>
  )
}

