import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h1 className="headd">WELCOME TO EduVenture</h1>
            <p className=" para">Your Adventure In Learning Begins Here!</p>
            <p className=" parasub">EduVenture Offers You a Community of lifelong learners and innovators where Knowledge Meets Adventure </p>
            <div className='button'>
              
                <button className='primary-btn'>
                  JOIN US NOW
                   <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
