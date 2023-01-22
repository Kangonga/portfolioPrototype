import React from 'react'
import "./About.scss"
import images from "../../constants/images"
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setabouts] = useState([])
  useEffect(() => {
    const query = '*[_type=="abouts"]'
    client.fetch(query)
    .then(data=>setabouts(data))
  }, [])
  
  // [
  //   {
  //     title:"Front end development", 
  //     description: "I am a good web developer",
  //     imgUrl:images.about01
  //   },
  //   {
  //     title:"Back end development", 
  //     description: "I am proficient in auditing systems and gauging their security",
  //     imgUrl:images.about02
  //   },
  //   {
  //     title:"API testing", 
  //     description: "I am proficient in auditingAPIs for faulty endpoints",
  //     imgUrl:images.about03
  //   }
  // ]
  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Apps</span> Means Good Business</h2>
      <br />
      <div className="app__profiles">
          {abouts?.map((about,index)=>
          
          <motion.div
            whileInView={{opacity:1}}
            whileHover= {{scale:1.1}}
            transition={{duration:0.5,type:"tween"}}
            className="app__profile-item"
            key={`profile-${index}`}
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:"20px"}}>{about.title}</h2>
            <p className="p-text">{about.description}</p>
          
          </motion.div>
          )}
      </div>
      </>
  )
}

export default About