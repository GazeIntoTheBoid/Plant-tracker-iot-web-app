import ParagraphBox from '@/components/ParagraphBox'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <>
      <Title variant='secondary' className={" text-green-800 p-2"} content= { "Project overview"}></Title>
      <div className='flex flex-col flex-wrap items-center w-5/6'>
        <ParagraphBox>This project is a full stack web IoT app that tracks the moisture content of plants.
The front end is built with react and tailwind CSS and the back end is split between next.js and node red.
Node red interacts both the PostgreSQL database that holds the plant profiles and soil data, it also acts as an MQTT client listening to “the things network” MQTT broker that the soil sensor broadcasts to.
Node red provides an API for next JS to query to render the plant profile pages.</ParagraphBox> 
      <img className = "w-5/6"src = "/assets/graphics/stackdiagram.png"/>
      <img className = "w-5/6"src = "/assets/graphics/lorawan.png"/>

      </div>
    </>
  )
}
