import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion"
import { CustomButton } from '../components'

const Home = () => {
    const snap = useSnapshot(state);

  return ( 
   <div>
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")} className='flex-row flex'>
                        <img src='./threejs.png'
                        alt='logo'
                        className='w-8 h-8 object-contain'
                        />
                        <h3 className='text-gray-100 px-1 my-2 top-5 font-bold'>Three.JS</h3>
                        <h1 className='px-5 my-1 text-xl text-green-100'> × </h1>
                        <a href='https://github.com/metehandoenmez' className='text-gray-100 h-9 px-1  font-light gap-2 flex flex-row rounded-md hover:bg-yellow-300 hover:bg-opacity-50'>
                            <img src='/github-mark-white.png' className='w-6 h-6 my-1.5 relative bottom-0.5' />
                            <span className='my-1.5'>metehandoenmez</span>
                        </a>
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text !text-green-100'>
                                LET'S <br className='xl:block hidden' /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-200 text-base'>
                                Create your unique and exclusive shirt design with our brand new 3D customization tool. <strong>Unleash your imagination</strong>{' '}and define your own style.
                            </p>

                            <CustomButton
                            type='filled'
                            title='Customize It'
                            handleClick={() => state.intro = false}
                            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
   </div>
  )
}

export default Home