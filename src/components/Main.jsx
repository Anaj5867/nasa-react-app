import React from 'react'


const Main = (props) => {
    const {data}=props
  return (
    <div className='imageContainer'>
        <img className='bgimage'src={data.hdurl} alt={data.title} />
    </div>
        
  )
}

export default Main
