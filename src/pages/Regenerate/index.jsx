import React, { useState } from 'react'
import { Image, Swiper,Checkbox ,Skeleton,ProgressBar} from 'antd-mobile'
import Title from '../../components/Title/index'
import './index.less'
import { useNavigate} from "react-router-dom";
import { CloseOutline,CameraOutline,LinkOutline } from 'antd-mobile-icons'
import share from '../../assets/Share.png'
export default () => {

    const navigate = useNavigate();
    const list = [
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
    const [skeletonShow,setSkeletonShow] = useState(true);
    const [num, setNum] = useState(0)
    const items = list.map((item, index) => (
        <Swiper.Item key={index}>
          <div className='imgagesList'>
                <Image src={item} className='imageItem' fit='fill'/>
            </div>
        </Swiper.Item>
      ))
    setTimeout(() => {
        setSkeletonShow(false)
    }, 2000);
    setInterval(() => {
        setNum(100)
    }, 1000);
  return (
    <div className='regenerate-box'>
         <div style={{padding:'10px'}}>
            <CloseOutline  fontSize={25} onClick={()=>navigate("/generate")}/>
            <span style={{float:'right'}}>
                <img style={{width:'25px'}} src={share} alt="" />
            </span>
        </div>
        {
            skeletonShow && <ProgressBar
            percent={num}
            style={{
              '--track-width': '2px',
            }}
          />
        }
       
        <header>
            {
                skeletonShow?<Skeleton animated className="customSkeleton" />:
                <div className='bg'>
                    <Image fit='fill' src="https://chimerai-main.oss-cn-beijing.aliyuncs.com/static/model_cover/SD.jpg" />
                </div>
            }
           
        </header>
        <div style={{padding:'.5rem 1.25rem'}}>
            <span><Checkbox style={{'--icon-size':'14px','--font-size':'14px'}}>Select All</Checkbox></span>
        </div>
        
        <main>
            <div className='imgagesList'>
            {
                list.map((item)=>{
                    return skeletonShow?<Skeleton animated className="check-box" />:
                    <div className='check-box'>
                        <Checkbox 
                            style={{
                                '--icon-size': '14px',
                            }} 
                            className='check-btn'>

                            </Checkbox>
                        <Image src={item} className='imageItem' fit='fill'/>
                    </div>
                    
                    
                })
            }
            </div>
        </main>
        <footer>
            <button className='btn' onClick={()=>navigate("/generate")}>Regenerate</button>
        </footer>
       
        
    </div>
  )
}