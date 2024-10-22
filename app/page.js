import ParagraphBox from '@/components/ParagraphBox'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <>
      <Title variant='secondary' className={" text-green-800 p-2"} content= { "Project overview"}></Title>
      <div className='flex flex-col flex-wrap items-center w-5/6'>
        <ParagraphBox>This project is a full stack web IoT app that tracks the moisture content of plants.
The front end is built with react and tailwind CSS and the back end is split between Next.js and a Node red server.
The Node red server acts as an MQTT client which parses and stores soil sensor broadcasts relayed to it by The Things Network MQTT broker.
The Node red server also provides API end points which are queried by the app to generate each plants profile page.</ParagraphBox> 
      <img className = "w-5/6"src = "/assets/graphics/stackdiagram.png"/>
      <img className = "w-5/6"src = "/assets/graphics/lorawan.png"/>

      </div>
    </>
  )
}
