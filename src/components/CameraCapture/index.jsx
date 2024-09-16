import React, { useState, useEffect, useRef } from 'react';
import {CameraOutline,CheckCircleFill,CloseCircleFill } from 'antd-mobile-icons'
import './index.less'
import { Image} from 'antd-mobile'
import vector from '@/assets/Vector.svg'
const CameraCapture = ({backSrc}) => {
    const [visible, setVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);

  const getMedia = () => {
    setVisible(true)
    const constraints = {
      video: { width: '100%', height: '100vh' }
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };
  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setVideoSrc(canvas.toDataURL('image/png'));
  };
 const ok = () => {
    // 将视频流停止
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    setVisible(false)
    backSrc(videoSrc)
    setVideoSrc(null)
 }
  return (
    <>
        {
            visible && 
            <div className='video-container'>
                <video ref={videoRef} autoPlay playsInline />
                {videoSrc ? <img className='img-bg' height="100%"  src={videoSrc} />:
                 <Image className='img-bg' height="80%"  src={vector} />}
               
                <div className='btn-container' >
                    {videoSrc && <CloseCircleFill fontSize={40} color='#fff' onClick={()=>setVideoSrc(null)}/>}
                    {videoSrc ? <div className='btn' onClick={()=>setVideoSrc(null)}>重拍</div>: <div className='btn' onClick={takePhoto}>拍摄</div>}
                    {videoSrc && <CheckCircleFill fontSize={40} color='#fff' onClick={()=>ok()}/>}
                </div>
                
            </div>
        }
      
      <CameraOutline fontSize={20} onClick={getMedia} />
    </>
  );
};
 
export default CameraCapture;