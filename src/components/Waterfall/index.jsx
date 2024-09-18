import React , { useEffect, useState }  from 'react';  
import { Image, ImageViewer,Footer,Button } from 'antd-mobile'
import './index.css'; // 确保正确引入CSS文件  
 // 多张图片预览
//  const Multi = ({items,index,provisible,closeImage}) => {
//     const [visible, setVisible] = useState(provisible)
//     return (
//     <>
//         <ImageViewer.Multi
//             images={items}
//             visible={visible}
//             defaultIndex={index}
//             onClose={() => {
//                 closeImage()
//             }}
//         />
//     </>
//     )
// }
//单张图片预览
const Single = ({imgSrc,closeImage}) => {
    const [visible, setVisible] = useState(true)
    
    return (
      <>
        <ImageViewer
          classNames={{
            mask: 'customize-mask',
            body: 'customize-body',
          }}
          image={imgSrc}
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          afterClose={() => {
            closeImage()
          }}
        />
      </>
    )
  }


function Waterfall(){
    const [visible, setVisible] = useState(false)
    const [imgIndex, setImgIndex] = useState(0)
    const [imgSrc, setImgSrc] = useState('')
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
   const openView = (i,src)=>{
    setImgSrc(src)
    setImgIndex(i)
    setVisible(true)
   }
    return (
        <>
            <div className="masonry" >  
                {items.map((item, index) => (  
                <div key={index} className="masonry-item">  
                    <Image  src={item} onClick={()=>openView(index,item)}/>
                </div>  
                ))}  
                
            </div>  
            <Footer label='没有更多了'></Footer>
            {
                visible && <Single imgSrc={imgSrc} closeImage={()=>setVisible(false)}/>
            }
        </>
        
    )
}
  
export default Waterfall;
