import React from 'react'
import box2 from '../images/box2.png'

const Box2 = () => {
    return (
        <div>
            <div className='container-fluid  p-0 m-0'>
                <div className="row ">
                    <div className='col-xs-12 box2_para col-md-6 order-xs-last  order-xs-2 order-sm-2 order-md-1  d-flex align-items-center justify-content-center' style={{padding:"5rem" }}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero deleniti eaque aliquam asperiores minima, laborum necessitatibus laudantium, nobis est voluptates perferendis iure, voluptatem quos doloremque eligendi
                            dignissimos eum nulla quibusdam ducimus. Aperiam libero sunt at quaerat ad harum deleniti a.
                        </p>
                    </div>
                    <div className='col-md-6 col-xs-12 order-xs-1 order-first order-sm-1 order-md-2 p-0'>
                        <img src={box2} className="img-fluid p-0" alt="box1" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Box2
