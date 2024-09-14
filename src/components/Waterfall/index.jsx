import React , { useState }  from 'react';  
import { Image, ImageViewer,Button } from 'antd-mobile'
import './index.css'; // 确保正确引入CSS文件  
  
 // 多张图片预览
 const Multi = ({items,index,provisible}) => {
    const [visible, setVisible] = useState(provisible)
    debugger
    return (
    <>
        <ImageViewer.Multi
            images={items}
            visible={visible}
            defaultIndex={index}
            onClose={() => {
                setVisible(false)
            }}
        />
    </>
    )
}
function Waterfall(){
    const [visible, setVisible] = useState(false)
    const [imgIndex, setImgIndex] = useState(0)
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
   const openView = (i)=>{
    setImgIndex(i)
    setVisible(true)
   }
    return (
        <div className="masonry">  
            {items.map((item, index) => (  
            <div key={index} className="masonry-item">  
                <Image lazy src={item} onClick={()=>openView(index)}/>
                {
                    visible && <Multi items={items} index={imgIndex} provisible={visible}/>
                }
                
                {/* <img style={{width:'100%',borderRadius:'10px'}} src={item}></img> */}
            </div>  
            ))}  
        </div>  
    )
}
  
export default Waterfall;