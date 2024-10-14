import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function MenuButton({content,pathLink}) {
  return (
    <Link href = {pathLink}>
    <Button variant = {"secondary"}content = {content} ></Button>
    </Link>
  )
}
