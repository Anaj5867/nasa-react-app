import React from 'react'

const Footer = (props) => {
    const {s,showModel,data}=props;
  return (
    <footer>
        <div className='bgGradient'></div>
    <div>
    <h2>APOD Project</h2>
    <h1>{data?.title}</h1>
      
      <button onClick={s}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
    </div>
    </footer>
  )
}

export default Footer
