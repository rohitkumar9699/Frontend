import React from 'react'

function Category({finalCategory ,setCatName}) {
  let cat = finalCategory.map((val, idx)=>{
      return(
              <li onClick={()=>setCatName(val)} key={idx} className="bg-black text-white py-1 mb-1">{val}</li>
      )
    })

  return (
    <div>
      <h4 className='pd-10px bg-warning'>Product Catergory</h4>
      
      <ul className="list-unstyled">
      {/* <li className="bg-black text-white py-1 mb-1yyy">Bracelet 20</li> */}
      {cat}
      </ul>
    </div>
  )
}

export default Category
