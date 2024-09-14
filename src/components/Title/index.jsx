import React from 'react'
import { CloseOutline,MinusOutline,RightOutline } from 'antd-mobile-icons'
import {
    useNavigate,
  } from "react-router-dom";
const Title = ()=>{

    const navigate = useNavigate();
    return (
        <div style={{padding:'10px'}}>
            <CloseOutline onClick={()=>navigate("/deisgn")}/>
            <span style={{float:'right'}} onClick={()=>navigate("/regenerate")}>Generate<MinusOutline /><RightOutline /></span>
        </div>
    )
}
export default Title;