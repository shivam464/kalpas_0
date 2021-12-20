import React from 'react'
import Bespoke from '../components/Bespoke'
import Box1 from '../components/Box1'
import Box2 from '../components/Box2'
import Navbar from '../components/Navbar'
import Sofa from '../components/Sofa'
import Touch from '../components/Touch'

const Cutom_joinery = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar/>
            <Sofa/>
            <Bespoke/>
            <Box1/>
            <Box2/>
            <Touch/>

        </div>
    )
}

export default Cutom_joinery
