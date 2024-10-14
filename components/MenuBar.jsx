import React from 'react'
import MenuButton from './MenuButton'

const PageContentList = [{
  "link":"/plantdash",
  "Name": "CATALOGUE"
},
{
"link": "/weather",
"Name" : "WEATHER"
},
{
  "link": "/",
  "Name": "ABOUT"
},
]


export default function MenuBar() {  
  ///we map create a menubutton comp. for each page in the page content list - this comp. wraps a Button comp. in a routing link.
  return (
   <div className='flex flex-row flex-wrap gap-1 p-2 items-center justify-center'>
   {PageContentList.map((page,index)=>{return(<MenuButton key = {index} content ={page.Name} pathLink = {page.link}/>)})}
   </div>
  )
}
