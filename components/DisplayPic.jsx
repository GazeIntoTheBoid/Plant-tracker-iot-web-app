import React from 'react'

export default function DisplayPic({imagePath,className}) {
  return (
    <img src = {imagePath} className ={ `rounded-full object-cover w-28 h-28 ${className}`} />
  )
}
