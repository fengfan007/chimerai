import React from 'react'
import { Button, Grid, Space } from 'antd-mobile'
import { RedoOutline, HeartOutline,RightOutline } from 'antd-mobile-icons'
import Waterfall from '../../components/Waterfall'
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
            <button className='btn' onClick={()=>navigate("/generate")}>Upload Inspiration</button>
        </header>
       
        <main>
            <div className='title'>
                <span>Moodboard</span>
                <span style={{float: 'right'}}>
                    <Button >
                        <Space>
                            <span>Dress</span>
                            <RightOutline />
                        </Space>
                    </Button>
                </span>
            </div>
            <Waterfall/>
        </main>
    </div>
  )
}

