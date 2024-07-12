import React from 'react'
import Button from './Button'

const list = ['All', 'Live', 'Gaming', 'Soccer']

const ButtonList = () => {
  return (
    <div className='flex'>
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Valentines"/>
      <Button /> */}
      {list.map(name => <Button name={name} />)}
    </div>
  )
}

export default ButtonList