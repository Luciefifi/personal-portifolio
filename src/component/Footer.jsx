import React from 'react'
import {AiFillFacebook, AiFillLinkedin , AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'


export default function Footer() {
  return (
    <div>
       <div className="footer">
        <div className="social-medias">
            <AiFillFacebook/>
            <AiFillLinkedin/>
            <AiOutlineInstagram/>
            <AiOutlineTwitter/>
        </div>
        <div className="foot-note">
            <p>Copyright &copy; all right reserved</p>

        </div>
      

      </div>
    </div>
  )
}
