import React from 'react'

export default function LoginPage() {
  return (
    <div className='login-container'>
        <div className='container'>
            <div className="image">
                <img src="/assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.jpeg" alt="" />
            </div>
            <div className="personal-info">
                <h2>Welcome back</h2>
                <div className="form">
                    <form action="">
                        <div>
                        <label htmlFor="email">
                            Email:
                            </label>  
                            <input 
                            type="text"
                            placeholder='email@gmail.co'
                            value="email"
                            />

                        </div>
                       
                       <div>
                       <label htmlFor="password">
                            Password:
                            </label>
                            <input 
                            type="text"
                            placeholder='........'
                            value="password"
                            />
                     

                       </div>
                       <div>
                        <label >
                            <input 
                            type="checkbox"
                            checked={true}
                             />
                             Remember me
                        </label>
                        <span>forgot password</span>
                       </div>
                       <button type='submit'>
                        Sign in

                       </button>
                      
                    </form>
                    <div className="social-login">
                        <div className="google">
                            <button>
                            <img src="/assets/images.png" alt="" />
                            </button>
                        </div><div className="facebook">
                            <button>
                            <img src="/assets/Facebook_logo_PNG12.png" alt="" />
                            </button>
                        </div><div className="github">
                            <button>
                          <img src="/assets/GitHub-Mark.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <p>don't have account?</p>
                    <a href="#">create an account</a>
                </div>
            </div>


        </div>
      
    </div>
  )
}
