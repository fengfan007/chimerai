import React, { useEffect, useState } from 'react'
import { Image, Space,Popover } from 'antd-mobile'
import Title from '../../components/Title/index'
import './index.less'
import { DownOutline,CameraOutline,RightOutline,CloseOutline } from 'antd-mobile-icons'
import img from '../../assets/Vector.svg'
import right from '../../assets/Arrow-right.png'
import { useNavigate} from "react-router-dom";
export default () => {
    
    const navigate = useNavigate();
    const items = [
        'https://mind-file.oss-cn-beijing.aliyuncs.com/20240913/d71ceb79ee94fac66dfe183217fce785.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/SD.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/10.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/20240404000721.png',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/00041-namilia-fall-2024-.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/the-row-resort-2024.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/14.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/9.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/im_1718120603971599_000_126895183.png',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/Chimer_00003773.png',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/im_1717499609625525_000_1919441433.png',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/girlcore.jpg',
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/AdamLippes.jpeg'
    ]
    const [visible, setVisible] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setVisible(false)
        }, 3000);
    })
  return (
    <div className='generate-box'>
        <div style={{padding:'10px'}}>
            <CloseOutline fontSize={25} onClick={()=>navigate("/deisgn")}/>
            
            <span style={{float:'right',color:' #FA8728'}} onClick={()=>navigate("/regenerate")}>
                <Space>
                    Generate
                    <img style={{width:'20px',verticalAlign:'middle'}} src={right}/>
                </Space>
            </span>
        </div>
        <header>
            <Popover
                visible={visible}
                placement='bottom-start'
                mode='dark'
                content={
                    <>
                    For better image effect, please<br/> upload a clear, front view,<br/> unobstructed image
                    </>
                }
            >
                <div className='bg'>
                    <Image height="80%"  src={img} />
                </div>
            </Popover>
        </header>
        <div style={{padding:'10px'}}>
            <span>Recents <DownOutline /></span>
            <span style={{float:'right'}} ><CameraOutline fontSize={20}/></span>
        </div>
        <main>
            {
                items.map((item,index)=>{
                    return (
                        <div className='imgagesList' key={index}>
                            <Image src={item} className='imageItem' fit='fill'/>
                        </div>
                    )
                    
                })
            }
        </main>
    </div>
  )
}