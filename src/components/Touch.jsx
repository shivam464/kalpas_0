import React from 'react'
import room from '../images/room.png'

const Touch = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center text-center '>
            <div className='container-fluid p-0'>
                <img src={room} class="img-fluid" alt="room" />
            </div>
            <div className=' container touch_div ' style={{ margin: "2rem", maxWidth: "50rem" }}>
                <div className='row '>
                    <div className='col-sm-12 para_div'>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo, porro eos doloribus ab sint dolor rerum quae ratione necessitatibus, officiis aliquid ut deserunt perspiciatis laborios
                            consequuntur error
                        </p>
                    </div>
                    <button type="button" className="btn btn-dark touch_btn p-2 col-sm-12 m-auto" style={{ maxWidth: "25rem" }}>Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Touch
