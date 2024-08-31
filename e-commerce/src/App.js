import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Category from './Category';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [finalCategory,setfinalCategory]=useState([])
  const [finalPro, setFinalPro] = useState([])
  const [catName, setCatName]= useState('')

  let getCatogery = ()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=> res.data)
    .then((finalRes)=>{
      let names = finalRes.map(item => item.name);
      // console.log(names);
      setfinalCategory(names)
    }
    )
  }

  let getProduct =()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finRes)=> {
      setFinalPro(finRes.products)
      
    })
  }

  let items = finalPro.map((val,idx)=>{
    // console.log(val.title);
    console.log(val.images);
        
    return(
      <ProductItems title={val.title} price={val.price} images={val.images} key={idx}/>
    )
  })

  useEffect(()=>{
    getCatogery();
    getProduct();
  },[])


  //    categories wise.........
  useEffect(()=>{
    if(catName !=='')
    {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res)=>res.data)
      .then((finRes)=> {
        setFinalPro(finRes.products)
        
      })
    }
    
  },[catName])

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center display-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3">
            <Category  finalCategory={finalCategory} setCatName={setCatName}/>
          </div>
          <div className="bg-danger col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4"> {/* Bootstrap grid system for responsive columns and gaps */}
      
              {
                finalPro.length >0 ?
                items : "No Data Found"
              }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function ProductItems({title, price ,images})
{
  return(
    <div className="col">
      <div className="card shadow-lg bg-dark text-white text-center ">
        <img width={120} className="card-img-top" src={images} alt="IPhone" />
        
        <h5 className="card-title">{title}</h5>
          <b className="card-text">RS {price}</b>
      </div>
    
    </div>
  )
}
