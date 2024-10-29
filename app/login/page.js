
import Input from '@/components/Input'
import SmallFormContainer from '@/components/SmallFormContainer'
import TextInput from '@/components/TextInput'
import React from 'react'

export default function page() {
  return (
    <div>
        <SmallFormContainer>
        <TextInput description = "Username:"placeholder={"Username..."} inputID = {"usernameLogin"}/>
        <Input type = "password"/>
        </SmallFormContainer>


    </div>
  )
}
