import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex m-2 justify-between border border-black w-[900px]'>
      <Button name="all"/>
      <Button name="trending"/>
      <Button name="song"/>
      <Button name="sports"/>
      
    </div>
  )
}

export default ButtonList