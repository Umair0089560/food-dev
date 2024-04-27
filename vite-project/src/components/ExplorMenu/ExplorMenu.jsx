import React from 'react'
import "./ExplorMenu.css"
import { menu_list } from '../../assets/assets'
const ExplorMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu mt-5' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=> {
            return (
                <div onClick={()=> setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    
                </div>
                
            )
        })}
      </div>
  
    </div>
  )
}

export default ExplorMenu
