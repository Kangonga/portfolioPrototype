import React from 'react'
import "./Header.scss"
import {easeInOut, motion} from "framer-motion"
import images from "../../constants/images"
import  {AppWrap}  from '../../wrapper/'
const Header = () => {
  let scaleVariants = {
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:"easeInOut"
      }
    }
  }
  return (
    <div className='app__header app__flex'>

      <motion.div 
        whileInView={{
          x:[-100,0],
          opacity:[0,1]}}
          transition={{duration:0.8}}
          className="app__header-info">

            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{marginLeft:20}}>
                  <p className='p-text'>Hello, I am </p>
                  <h1 className="head-text">Kevin</h1>
                </div>
              </div>

              <div className="tag-cmp app__flex">
                <p className="p-text">Web Developer</p>
                <p className="p-text">API tester</p>
                <p className="p-text">Freelancer</p>
              </div>
            </div>

        </motion.div>

        <motion.div
        className='app__header-img '
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5,delayChildren:0.5}}
        >

          <img src={images.myPic} alt="profile_bg" className='app__header-myPic'/>
          <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            className="overlay_circle"
          />
          
        </motion.div>


        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.javascript,images.redux,images.sass].map((circle,index)=>{
          return   <div key={`${index}`}className='circle-cmp app__flex'>
            <img src={circle} alt="circle" />
          </div>  
          })}
        </motion.div>

    </div>

  )
}

export default AppWrap(Header,'home')