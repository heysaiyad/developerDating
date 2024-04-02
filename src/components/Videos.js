import React from 'react'
import "./videos.css";

const Videos = () => {
  return (
    <div className='Apps'>
    <div className="video-container">
<h1 className="video-title">Ooopsss... 🤪</h1>

<video height="400" width="400" controls autoPlay loop>
    <source src={require("../video/dating.mp4")} type="video/mp4" />{" "} 
   </video>
</div>
</div>
  )
}

export default Videos