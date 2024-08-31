import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {Card,Container, Row} from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';

import {testdata} from "./data/testdata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function App() {

//   let fun=()=>{
//     console.log(count);
//     alert("Button Pressed")
//   }

//   const [count, setCount]= useState(10)

//  let displaydata= ()=>{
//   setCount(count+1)
//  }
    let temp;
    const [pshow, setShow]=useState(false);
    if(pshow)
    {
      temp=<>
      <p>Good Morning Rohit</p>
      <button onClick={()=>setShow(!pshow)}>Hide me</button>
      </>
    }
    else
    {
      temp=<button onClick={()=>setShow(!pshow)}>
      show me 
    </button>
    }



  return (
    <div className="App">
    
    {/* <Header email="rohit_kumar@srmap.edu.in">
      <h1>Welcome to Header</h1>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faPhone}/>
      <FontAwesomeIcon icon={faSearch}/>
    </Header> */}
  
    {/* <button style={{background:'aqua', fontSize:'20px'}} onClick={fun}>Click me</button>
      <br />
      <br />
    <button style={{background:'aqua', fontSize:'20px'}} onClick={displaydata}>Click me2</button>
    {count} */}

      {temp}









      {/* <div className='row'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div> */}

      {/* <Container>
        <Row>
         {testdata.map((v,i)=>{
            return(
              <BasicExample  item={v}/>
            )
         })}
        </Row>
      </Container> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// function BasicExample({item}) {
//   return (
//     <Card  border="success" style={{ width: '16rem', background:'aqua', margin:'auto'}}>
//         <Card.Header>{item.id}</Card.Header>
//         <Card.Body>
//           <Card.Title>Success Card Title {item.userId}</Card.Title>
//           <Card.Text>
//             {item.title}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//   )
// }


// function Card()
// {
//   return(
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   )
// }