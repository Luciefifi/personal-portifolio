import React from "react";
import Header from "../component/Header";
// import image from '../assets'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="intro">
        <div className="t-intro">
          <div className="name">
            <span>Hi I'm Lucie ,</span>
            <span>A Full stack Developer</span>
          </div>
          <div className="c-intro">
            <p>
              I am an enthusiasitic versatile young person , with an outstanding
              academic background and attitude to work , I am able to get
              things/ job done with a little or no supervision at all . I always
              aim to expa nd my knowledge , skills, experience , potentials on
              project that enc ourages the team effort in challenging assignment
              and position in software or web development where excellent
              technical skills cna be utilized to improve institution
              profitability.
            </p>
          </div>

          <button className="resume-btn"> Download Resume</button>
        </div>

        {/* <div className="img"> */}
        <img src="/assets/mypic.jpg" alt="mine" />
        {/* </div> */}
      </div>
      <div className="posts">
        <div className="tit">
           
          <p>Recent Posts</p>
          <p>View all</p>
          
        </div>
        <div className="cards">
          <div className="card1">
            <div className="title">
              <p>Making a design system from scratch</p>
            </div>
            <div className="date-title">
              <p>12 Aug 2023</p>
              <p>Design , Pattern</p>
            </div>
            <div className="content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="card2">
            <div className="title">
              <p>Making a design system from scratch</p>
            </div>
            <div className="date-title">
              <p>12 Aug 2023</p>
              <p>Design , Pattern</p>
            </div>
            <div className="content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
