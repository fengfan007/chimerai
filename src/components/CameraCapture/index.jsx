import React, { useState, useEffect, useRef } from 'react';
import {CameraOutline,CheckCircleFill,CloseCircleFill } from 'antd-mobile-icons'
import Camera , { FACING_MODES, IMAGE_TYPES }from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './index.less'
import { Image} from 'antd-mobile'
import vector from '@/assets/Vector.svg'
const CameraCapture = ({backSrc}) => {
    const [visible, setVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const getMedia = () => {
    setVisible(true)
    // const width = window.innerWidth
    // const height = window.innerHeight
    // const constraints = {
    //   video: { 
    //     width: width, 
    //     height: height,
    //     frameRate: { min: 20, max: 60 },
    //     facingMode: { exact: "environment" } 
    //  },
      
    // };
    // navigator.mediaDevices.getUserMedia(constraints)
    //   .then((stream) => {
    //     videoRef.current.srcObject = stream;
    //     videoRef.current.play();
    //   })
    //   .catch((error) => {
    //     console.error('Error accessing camera:', error);
    //   });
  };
  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setVideoSrc(canvas.toDataURL('image/png'));
  };
  const cancel =()=>{
    setVisible(false)
    setVideoSrc(null)
  }
 const ok = () => {
    // 将视频流停止
    // const stream = videoRef.current.srcObject;
    // const tracks = stream.getTracks();
    // tracks.forEach((track) => {
    //   track.stop();
    // });
    setVisible(false)
    backSrc(videoSrc)
    setVideoSrc(null)
 }
 
  const onTakePhoto =(videoSrc)=> {
    setVideoSrc(videoSrc)
  }
  return (
    <>
        {
            visible && 
            <div className='video-container'>
                <Camera
                  onTakePhoto = { (dataUri) => { onTakePhoto(dataUri) } }
                  idealFacingMode = {FACING_MODES.ENVIRONMENT}
                  // isMaxResolution = {true}
                  idealResolution = {{width,height}}
                  sizeFactor = {1}
                  isFullscreen = {true}
                />
                {/* <video  ref={videoRef} autoPlay playsInline onLoadedMetadata={handleLoadedMetadata}/> */}
                {videoSrc ? <img className='img-bg'  src={videoSrc} />:
                 <Image className='img-bg' height="80%"  src={vector} />}
               
               {
                videoSrc &&
                <div className='btn-container' >
                    {videoSrc && <CloseCircleFill fontSize={40} color='#fff' onClick={()=>cancel()}/>}
                    {videoSrc ? <div className='btn' onClick={()=>setVideoSrc(null)}>重拍</div>: <div className='btn' onClick={takePhoto}>拍摄</div>}
                    {videoSrc && <CheckCircleFill fontSize={40} color='#fff' onClick={()=>ok()}/>}
                </div>
               }
                
            </div>
        }
      
      <CameraOutline fontSize={20} onClick={getMedia} />
    </>
  );
};
 
export default CameraCapture;
