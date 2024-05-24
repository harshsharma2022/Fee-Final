import React from "react"
import './header.css'
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB '>
          <div className='logo'>
            <h1>EduVenture</h1>
            <span> ARISE . AWAKE . ASCEND </span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f iconnf  '></i>
            <i className='fab fa-instagram iconn '></i>
            <i className='fab fa-twitter iconn'></i>
            <i className='fab fa-youtube iconn'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
