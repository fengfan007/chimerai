import React from 'react'
import { Image, Space,Grid } from 'antd-mobile'
import Title from '../../components/Title/index'
import './index.less'
import { DownOutline,CameraOutline,RightOutline } from 'antd-mobile-icons'
import img from '../../assets/Vector.svg'
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
        'https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/9.jpg'
    ]
  return (
    <div className='generate-box'>
        <Title></Title>
        <header>
            <div className='bg'>
                <Image height="80%" src={img} />
            </div>
        </header>
        <div style={{padding:'10px'}}>
            <span>Recents<DownOutline /></span>
            <span style={{float:'right'}} ><CameraOutline /></span>
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