import React from 'react'
import "./Work.scss"
import { useState, useEffect } from 'react'
import {AiFillEye,AiFillGithub} from "react-icons/ai"
import {AppWrap} from "../../wrapper"
import images from "../../constants/images"
import {motion} from "framer-motion"


let abts = [
  {
    title:"Front end development", 
    description: "I am a good web developer",
    imgUrl:images.about01
  },
  {
    title:"Back end development", 
    description: "I am proficient in auditing systems and gauging their security",
    imgUrl:images.about02
  },
  {
    title:"API testing", 
    description: "I am proficient in auditingAPIs for faulty endpoints",
    imgUrl:images.about03
  }
]
const Work = () => {

  const [activeFilter,setActiveFilter] =useState('All')
  const [animateCard, setanimateCard] = useState({y:0,opacity:1})

  function handleWorkFilter(e){
  }
  return (
    <>
      <h2 className='head-text'>My Portfolio</h2>

      <div className="app__work-filter">
        {['front end','Mobile dev','back end', 'React JS', 'All'].map((item,index)=>
        <div key="index" onClick={handleWorkFilter}
          className={`app__work-filter-item app__flex p-text ${activeFilter===item? "item-active":""}`}
          >
            {item}
        </div>
        )}
      </div>

      <motion.div>
        
      </motion.div>
    </>
    )
}

export default AppWrap(Work,'work')