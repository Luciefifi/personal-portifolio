import React from 'react'

export default function SignupPage() {
  return (
    <div className='login-container'>
        <div className='container'>
            <div className="signup_image">
                <img src="/assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.jpeg" alt="" />
            </div>
            <div className="personal-info_signup">
                <div className='personal-info-container'>
                <h2>Create account </h2>
                <h2>Provide your details</h2>
                <div className="form">
                    <form action="">
                        <div>
                        <label htmlFor="email">
                            Email
                            </label>  
                            <br />
                            <input 
                            type="text"
                            placeholder='email@gmail.com'
                            style={{ width: '397px',  height:"37px" , border:"none", marginTop:"10px", fontFamily: "Battambang" }}

                            />
                        </div>
                        <div>
                        <label htmlFor="email">
                            Email
                            </label>  
                            <br />
                            <input 
                            type="text"
                            placeholder='email@gmail.com'
                            style={{ width: '397px',  height:"37px" , border:"none", marginTop:"10px", fontFamily: "Battambang" }}

                            />

                        </div>
                        <div>
                        <label htmlFor="email">
                            Email
                            </label>  
                            <br />
                            <input 
                            type="text"
                            placeholder='email@gmail.com'
                            style={{ width: '397px',  height:"37px" , border:"none", marginTop:"10px", fontFamily: "Battambang" }}
                            />

                        </div>
                       <div>
                       <label htmlFor="password">
                            Password
                            </label>
                            <br />
                            <input 
                            type="text"
                            placeholder='Enter your password'
                            style={{ width: '397px',  height:"37px" , border:"none" , marginTop:"10px",fontFamily: "Battambang" }}

                            />
                       </div>
                       <div className='rules_regulations'>
                        <p> by signup I agree to the</p>
                        <a href="#"> terms and conditions</a>

                       <span></span>
                        
                       </div>
                       <button type='submit'>
                        Create account

                       </button>
                   

                      
                    </form>
                    <div className="social-login">
                        <div className="google">
                            <button>
                            <img src="/assets/images.png" alt="" />
                            </button>
                        </div>
                        <div className="facebook">
                            <button>
                            <img src="/assets/Facebook_logo_PNG12.png" alt="" />
                            </button>
                        </div>
                        <div className="github">
                            <button>
                          <img src="/assets/GitHub-Mark.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="creat">
                    <p> already a Member ?</p>
                    <a href="#">signin</a>

                    </div>
                   
                </div>

                </div>
                
            </div>


        </div>
      
    </div>
  )
}
