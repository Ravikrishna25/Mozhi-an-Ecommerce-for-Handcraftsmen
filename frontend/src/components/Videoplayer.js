import React from 'react'
import ReactPlayer from 'react-player'
function Videoplayer() {
  return (
    <div className='col-12'>
    <h3 className='section-heading'>Video</h3>
    <div style={{display:"flex"}}>

    <ReactPlayer url='./Videos/vid1.mp4' playing={true}  style={{marginLeft:"3%",marginRight:"2%"}} width={700} height={400} loop={true} controls={true} />
    <ReactPlayer url='./Videos/vid2.mp4' playing={true} width={700} height={400} loop={true} controls={true}/>
    </div>

</div>
  )
}

export default Videoplayer