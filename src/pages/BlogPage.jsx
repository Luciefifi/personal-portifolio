/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState , useEffect} from 'react'
import Footer from '../component/Footer'


export default function BlogPage() {
const [images , setImages] = useState(0);
const imageUrls = [
  '/assets/31.jpg',
  '/assets/mypic.jpg',
  '/assets/pexels-jess-bailey-designs-788946.jpg'
]

useEffect(() => {
  const interval = setInterval(() => {
    setImages((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, 5000); // Adjust the interval as needed (5 seconds in this example)

  return () => {
    clearInterval(interval);
  };
}, [imageUrls.length]);
console.log(imageUrls)
console.log( "images", images)

const backgroundImageStyle = {
  backgroundImage: `url(${imageUrls[images]})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '400px',
  transition: 'background-image 1s ease-in-out', // Add a smooth transition effect
};

  return (
    <div className='container-blog'>
      <div className=' backgroung-image' style={backgroundImageStyle}> </div>
      <div className="blog-categories">
        <button className='all'>All</button>
        <button>Technology</button>
        <button>Engineering</button>
        <button>Economics</button>
        <button>Education</button>
        <span> <a href='##'>View all </a></span>
      </div>
      <div className='view'>
      <span > All categories</span>
      </div> 
      
      
      <div className="blogs">
      <div className='other-posts'>
      <span > Other posts</span>
      </div>
        <div className="row1">
          <div className="blog">
            <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 
            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="author">
              <div className="auth-image">
                <img src="/assets/31.jpg" alt="author" />
              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
          <div className="blog">
          <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 

            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="author">
              <div className="auth-image">
              <img src="/assets/31.jpg" alt="author" />

              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
          <div className="blog">
          <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 

            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="author">
              <div className="auth-image">
              <img src="/assets/31.jpg" alt="author" />

              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
        </div>
        <div className="row2">
          <div className="blog">
          <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 

            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="sing-author">
              <div className="auth-image">
              <img src="/assets/31.jpg" alt="author" />

              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
          <div className="blog">
          <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 

            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="author">
              <div className="auth-image">
              <img src="/assets/31.jpg" alt="author" />

              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
          <div className="blog">
          <img src="/assets/pexels-jess-bailey-designs-788946.jpg" alt="image" /> 

            <div className='category'>
              <button>Technology</button>
            </div>
            <div className="blog-title">
                <p>Technology Advancement : the impact of technolgy in daily life</p>
              </div>
              <div className="author">
              <div className="auth-image">
              <img src="/assets/31.jpg" alt="author" />

              </div>
              <div className="auth-name">
                <p>Lucie Niyomutoni / sept 05 , 2023</p>
              </div>

              </div>
              
          </div>
        </div>
      </div>
      <div className="pagination">
        <button>P</button>
        <button>1</button>
        <button className='current-page'>2</button>
        <button>3</button>
        <button>N</button>
      </div>
      <Footer/>
      
    </div>
  )
}

