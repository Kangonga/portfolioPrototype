import React from 'react'
import "./Work.scss"
import images from "../../constants/images"
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { urlFor, client } from '../../client'
import {AppWrap} from "../../wrapper"

const Work = () => {
  const [abouts, setabouts] = useState([])

  let abts = [
    {
      title:"Job Applications Site", 
      description: "This is a freelancing job application site",
      imgUrl:images.about01
    },
    {
      title:"School Portal", 
      description: "IA school portal site that can be used by institutions",
      imgUrl:images.about02
    },
    {
      title:"Make up artist portfolio", 
      description: "IThis is a portfolio for a make up artist",
      imgUrl:images.about03
    }
  ]
  return (
    <>
      <h2 className='head-text'>My <span>Portfolio</span> </h2>
      <br />
      <div className="app__profiles">
          {abts?.map((about,index)=>
          
          <motion.div
            whileInView={{opacity:1}}
            whileHover= {{scale:1.1}}
            transition={{duration:0.5,type:"tween"}}
            className="app__profile-item"
            key={`profile-${index}`}
          >

            {<img src={about.imgUrl} alt={about.title} />}
            <h2 className='bold-text' style={{marginTop:"20px"}}>{about.title}</h2>
            <p className="p-text">{about.description}</p>
          
          </motion.div>
          )}
      </div>
      </>
  )
}

export default AppWrap(Work,'work')