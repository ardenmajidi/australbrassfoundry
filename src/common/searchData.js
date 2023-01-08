import React from 'react'

export default function Searchdata({ fields}) {
  return (
    <div>
        <h4>Search</h4>
        <div className='search-box'>
        {fields.map((item,index)=>(item.sortAble)?<input placeholder={item.displayName} className='search-input'/>:'')
        
        }
      </div>
    </div>
  )
}

