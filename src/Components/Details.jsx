import React from 'react'
import './details.css'
import Logo from '../Assests/logo.png'
import Web from '../Assests/web.png'
import Icons from '../Assests/icons.png'
import Background from '../Assests/background.png'
function Details() {
  return (
    <div className='container'>
        <img src={Background} alt='Background' className='background'/>
        <img src={Logo} alt='Logo' className='logo'/>
        <div className='sub-container'>
            <p className='Title'>100% Uptime😎</p>
            <p>Zero Infrastructure </p>
            <p>Management</p>
            <div className='sub-container2'>
                <p className='Rectangle'></p>
                <p className='Circle'></p>
                <p className='Circle'></p>
            </div>
            <div className='sub-container3'>
                <img className='web' src={Web} alt='web'/>
                <img className='icons' src={Icons} alt='icons'/>
            </div>
        </div>
    </div>
  )
}

export default Details