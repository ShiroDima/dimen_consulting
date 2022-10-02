import React from 'react'
import statBgImg from '../../assets/stat-consult.png'

const Pane = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div>
                    <p>Lorem Ipsum Dolor</p>
                    <h2>Statistical Consulting</h2>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Pane