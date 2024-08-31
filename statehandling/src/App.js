import { useState } from 'react';
import './App.css';
import {qaData} from "./Data"
import Faqa from './Faqa';
// import 'react-notifications/lib/notification.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  const [staus, setStatus]= useState(true)
  const [pstate, setpstatus]= useState(false)
  const [menu ,setmenu]= useState(false);
  const [modal, setModal]=useState(false)

  const [ans, showans]= useState(-1);

  let showNotification=()=>
  {
    NotificationManager.info("Good morning")
    NotificationManager.success("Nice to see you here", 'Success')
    NotificationManager.warning('check sapelling', 'waring')
    NotificationManager.error('this is an error', 'ERROR')
  }

  return (
    <div className="App">
      <button onClick={()=>showNotification()}>Save</button>
      <NotificationContainer/>



      <Faqa/>
    {/* <div>
      <h1>Frequently ansked Qestions</h1>
      <div className='faq'>

        {
          qaData.map((item,i)=>{
            return(
              <div className='faqitems'>
                <h3 onClick={()=>showans(item.id)}>{item.question}</h3>
                <p className= {`para ${ans==item.id ?'pupdate':''}`}>{item.answer}</p>
              </div>
            )
          })
        }

      </div>
      
    </div> */}

{/* 
    <button onClick={() => setModal(!modal)}>Open Popup</button>
    <div className={`cover1 ${ modal ? 'cover2' : ''}`}></div>
    <div className={`pop1 ${ modal ? 'pop2' : ''}`}>
      <button onClick={() => setModal(!modal)}>&times;</button>
      <h1>Pop up Box </h1>

    </div>



      <button className='rkbtn' onClick={()=>setmenu(!menu)}>
        {(menu)? <span>&times;</span>:<span>&#9776;</span>}
        </button>

      <div className={`rk ${menu?'activemenu':''}`}>
        <ul>
          <li>Home</li>
          <li>Galary</li>
          <li>Course</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div> */}



      {/* <input type= {(pstate)? 'text': 'password'} />
      <button onClick={()=>setpstatus(!pstate)}>{(pstate)?'Hide':'Show'}</button>
      <br /> */}

      {/* {(staus)?
      <><p>Good morning Rohit</p> <button onClick={()=>setStatus(!staus)}>hide me</button></>:
      <button  onClick={()=>setStatus(!staus)}>Show me</button>
      } */}
    </div>
  );
}

export default App;
