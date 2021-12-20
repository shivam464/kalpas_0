import React from 'react'
import box1 from '../images/box1.png'

const Box1 = () => {
    return (
        <div>
            <div className='container-fluid  p-0 m-0'>
                <div className="row">
                       
                        <div className='col-md-6 col-xs-12 p-0'>
                            <img src={box1} className="img-fluid " alt="box1" />
                        </div>
                        <div className='col-xs-12 box1_para col-md-6 d-flex align-items-center justify-content-center' style={{padding:"5rem" }}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero deleniti eaque aliquam asperiores minima, laborum necessitatibus laudantium, nobis est voluptates perferendis iure, voluptatem quos doloremque eligendi
                                dignissimos eum nulla quibusdam ducimus. Aperiam libero sunt at quaerat ad harum deleniti a.
                            </p>
                        </div>
                    
            </div>
            </div>
        </div>
    )
}

export default Box1
