/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function ContactPage() {
  return (
    <div>
     <Header/>
     <div className="contact-cont">
    <div className="p-infor">
       {/* <div className="c-image"> */}
       <img src="/assets/contactphoto.png" alt="image" /> 
       {/* </div> */}
    <div className="emp-info">
      <form action="">
        <input type="text" placeholder='First Name' /> 
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Email'/>
       <textarea name="" id="" cols="30" rows="10"/>
        <button>HIRE ME</button> 
      </form>
    </div>
      </div>
      
     </div>
     <Footer/>
   
    </div>
  )
}
