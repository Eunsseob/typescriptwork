import React from 'react'
import { Menu } from './restaurant'

interface OwnProps extends Omit<Menu, 'category'> {
    showBestMenu(name:string):string
}
const BestMenu: React.FC<OwnProps> = ({name, price, showBestMenu}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default BestMenu

