import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoWhatsapp, IoMdMail} from "react-icons/io"
import './footerStyle.scss'
const Footer = () => {
    const handleClick=(url)=>{
        window.open(url, '_blank', 'noopener, noreferrer')
    }
  return (
    <div className='container containerFooter'>
        
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">@pluseg.info</Tooltip>}>
      {({ ref3, ...triggerHandler }) => (
        <div {...triggerHandler} className="footerIconsr">
            <h4 className='footerIcons' ref={ref3}onClick={()=>handleClick('https://www.instagram.com/pluseg.info/')}><AiFillInstagram /></h4>
        </div>
      )}
    </OverlayTrigger>   

    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">pluseg.info@gmail.com</Tooltip>}>
      {({ ref2, ...triggerHandler }) => (
        <div {...triggerHandler} className="footerIconsr">
            <h4 className='footerIcons' ref={ref2}onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}><IoLogoWhatsapp /></h4>
        </div>
      )}
    </OverlayTrigger>

    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">pluseg.info@gmail.com</Tooltip>}>
      {({ ref, ...triggerHandler }) => (
        <div {...triggerHandler} className="footerIconsr">
            <h4 className='footerIcons' ref={ref} onClick={(e) => {window.location= 'mailto:pluseg.info@gmail.com';e.preventDefault();}}><IoMdMail /></h4>
        </div>
      )}
    </OverlayTrigger>
    </div>
  )
}

export default Footer