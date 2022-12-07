import React from 'react'
import myVid from '../../imgs/hysterical-goat-360-ytshorts.savetube.me.mp4'
export default function NotFound() {
  return (
    <>
    <div className="container text-center vh-100 d-flex align-items-center justify-content-center">
        <div className="row px-3">
            <div className="col-md-12 p-5">
                <h2 className='mt-5 pt-4'>Ahhhhhhhhh! This page doesn't exist</h2>
                <p>Not to worry. You can either head back to our homepage, or sit there and listen to a goat screem like a human.</p>
                <video width="100%" height="100%" controls autoPlay loop type="video/mp4" src={myVid} className="w-75 h-75">
                </video>
            </div>

        </div>
      </div>

    </>
  )
}
