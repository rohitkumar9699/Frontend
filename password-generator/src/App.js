
import { useState } from 'react';
import './App.css';
import {UC, NC, SC, LC} from './PassChar.jsx'

function App() {
    const [uppercase, setuppercase]= useState(false);
    const [lowercase, setlowercase]= useState(false);
    const [numbers, setnumbers]= useState(false);
    const [symbols, setsymbols]= useState(false);
    const [passlength, setpasslength]= useState(10);
    const [pass,setPass]=useState('');


    let createPassword =()=>
    {
        let password =''
        let finalPassword =''
        if(uppercase || lowercase || numbers || symbols)
        {
            if(uppercase) password+=UC
            if(lowercase) password+=LC
            if(numbers) password+=NC
            if(symbols) password+=SC

            for( let i=0; i<passlength; i++)
            {
                finalPassword += password.charAt(Math.floor(Math.random() * password.length));

            }
            // alert(finalPassword)
            setPass(finalPassword)
        }
        else
        {
            alert("Please select any checkbox.........")
        }
    }
    let copyPass=()=>
    {
        navigator.clipboard.writeText(pass)
    }

  return (
    <div className="App">
       <div class="container">
        <h1>Password Generator</h1>
        <div id="password"> 
          <input type="text"  value={pass}/> 
          <button onClick={copyPass}>Copy</button>
          </div>
        
        <div>
            <label for="length">Password length</label>
            <input type="number" max={40} min={5} id="length"  value={passlength} onChange={(event)=>setpasslength(event.target.value)}/>
        </div>
        <div>
            <label><input type="checkbox" id="uppercase" checked={uppercase}  onChange={()=>setuppercase(!uppercase)}/> Include uppercase letters</label>
        </div>
        <div>
            <label><input type="checkbox" id="lowercase" checked={lowercase}  onChange={()=>setlowercase(!lowercase)}/> Include lowercase letters</label>
        </div>
        <div>
            <label><input type="checkbox" id="numbers" checked={numbers}  onChange={()=>setnumbers(!numbers)}/> Include numbers</label>
        </div>
        <div>
            <label><input type="checkbox" id="symbols" checked={symbols}  onChange={()=>setsymbols(!symbols)}/> Include symbols</label>
        </div>
        <div>
            <button id="generate" onClick={createPassword}>Generate password</button>
        </div>
    </div>
    </div>
  );
}

export default App;
