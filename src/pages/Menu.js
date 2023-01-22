import React from 'react'
import { MenuList } from "../helper/MenuList"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
         {MenuList.map((menuItem,index)=>{
          return <div className='menuItem' key={index}>
            <div><img src={menuItem.image}/></div>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.price} TL</p>
          </div>
         })}   
        </div>
    </div>
  )
}

export default Menu