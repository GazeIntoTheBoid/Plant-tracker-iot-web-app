'use client'

import React, { useState } from 'react'
import DisplayPic from './DisplayPic.jsx'
import Title from './Title.jsx'
import Link from 'next/link.js'



export default function PlantCardDetails({plant}) {

const [objectIsHovered,setObjectIsHovered] = useState(false)


    return (
    <Link href = {`/plantdash/${plant.plant_id}`}>
    <div className = " flex flex-row justify-around items-center" onMouseEnter = {() => { setObjectIsHovered(true)}} onMouseLeave = {() => { setObjectIsHovered(false)}} >
        
        <DisplayPic imagePath = {plant.plant_pic_url} />
        
                <div className='flex flex-col justify-center items-center m-1'>
                    <Title variant='secondary' content = {plant.plant_name} className={""}/>
                    <Title variant = "subTitle" content = {plant.plant_breed}/>
                </div>
                
                    <div className={`flex flex-col items-center justify-center absolute w-64 h-36 bg-opacity-80 backdrop-blur-sm bg-white mt-6 z-10 rounded-lg transition-opacity duration-200 ${objectIsHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {plant.most_recent_moisture ? <><Title variant='subTitle' content={`Hydration: ${plant.most_recent_moisture}%`}/>
                        <Title variant='subTitle' content={`last checked: ${plant.most_recent_time}`}/></> 
                        :
                        <><Title variant='subTitle' content={`Hydration: -- `}/>
                        <Title variant='subTitle' content={`last checked: NO DATA`}/></>
                         }
                    </div>
                
        
    </div>
    </Link>
  )
}
