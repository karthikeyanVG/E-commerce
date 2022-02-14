import React from 'react'
import { Button } from 'reactstrap'
import './CustomButton.css'
const CustomBUttons = ({ text, onClick, ...otherProps }) => {
  return (
    <div >
      <Button className='primary' onClick={onClick} {...otherProps}>{text}</Button>
    </div>
  )
}

export default CustomBUttons

export const SecondaryButton = ({ text, onClick, ...otherProps }) => {
  return (

    <div >
      <Button className='secondary' onClick={onClick} {...otherProps}>{text}</Button>
    </div>
  )
}

export const TertiaryBUttons = ({ text, onClick, ...otherProps }) => {
  return (

    <div >
      <Button className='tertiary' onClick={onClick} {...otherProps}>{text}</Button>
    </div>
  )
}