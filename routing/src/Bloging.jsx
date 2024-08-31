import React from 'react'
import Header from './common/Header'
import { data } from './data/blogDetails'
import { Link } from 'react-router-dom';

function Bloging() {
  let allblog = data.map((value,idx)=>{
    return(
      <div className='item'>
          <h3>{value.title}</h3>
          <p>{value.body}</p>
          <button> 
            <Link to={`/blog/${value.id}`}>Read More</Link> 
            </button>
        </div>
    )
  })
  return (
    <div>
       <Header/>
       <h1>Blog Page</h1>
       <div className='blogstyle'>
        {allblog}
       </div>
    </div>
  )
}

export default Bloging
