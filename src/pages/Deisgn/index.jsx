import React, { useState } from 'react'
import { Toast, Grid, Space } from 'antd-mobile'
import { RedoOutline, HeartOutline,RightOutline,HeartFill } from 'antd-mobile-icons'
import Waterfall from '@/components/Waterfall'
import frameImage from '@/assets/Frame.png'
import {useNavigate} from "react-router-dom";
import './index.less'
export default () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false)
  return (
    <div className="deisgn-box">
        <header>
            <div className='title'>
                <span>CHIMER AI</span>
                <span style={{float: 'right'}}>
                    <Space>
                        <RedoOutline onClick={()=> location.reload()}/>
                        {
                            !active?
                            <HeartOutline  onClick={()=>setActive(active => !active)}/>:
                            <HeartFill color='#FA8728' onClick={()=>setActive(active => !active)}/>
                        }

                    </Space>
                </span>
            </div>
            <button className='btn' onClick={()=>navigate("/generate")}>Upload Inspiration <img className='png' src={frameImage}/></button>
        </header>

        <main>
            <div className='title'>
                <span className='text'>Moodboard</span>
                <span style={{float: 'right'}}>
                    <div className='dressBtn' onClick={() => {
                            Toast.show({
                                icon: 'fail',
                                content: '功能暂未开放！',
                            })
                        }}>
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

