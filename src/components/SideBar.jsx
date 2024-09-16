import React from 'react'

const SideBar = (props) => {
   const{s,data}=props
  return (
    <div className='sidebar'>
        <div onClick={s} 
        className='bgOverlay'></div>
        <div className='sidebarContents'>
        <h2>{data?.title}</h2>
      <div className='descriptionexplanation'>
        <p className='descriptiondate'>{data?.date}</p>
        <p >{data.explanation} </p>
      </div>
      <button onClick={s}>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
    </div>
    
        </div>
     
  )
}

export default SideBar
