import { useState } from 'react';
import './App.css';
import { tab } from './tab';

function App() {
  const [todolist, setTodolist]=useState([]);
  
  const [para, setpara]=useState(tab[0].description);

  let check =false;
  function changepara(idx)
  {
    setpara(tab[idx].description)
    check = true;
  }








///////////////////////////////////////////////  
  let saveTodolist=(event)=>
  {
    let newval = event.target.item.value;
    if(!todolist.includes(newval))
      setTodolist ([... todolist, newval])
    else  
    alert("Item all ready exist")
    event.preventDefault()
  }
  let list = todolist.map((value, key)=>{
    return(
      <Todoitems value={value} idx={key} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">
      <div className='tabdiv'>
        <h1>Tab Demo</h1>
        <ul>
          {tab.map((value, idx)=>{
              return(
                <li>
                    <button className= {check?'btnupdate':''} onClick={()=>changepara(idx)}>{value.title}</button>
                </li>
              )
          })}
          
        </ul>
        <p>
          {para}
        </p>
      </div>





      <br /><br />

      <h1>ToDo List</h1>
      <form action="" onSubmit={saveTodolist}>
        <input type="text"  name='item'/>
        <button>Save</button>
      </form>

      <div className='outer'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function Todoitems ({value, idx, todolist,setTodolist})
{
    function remoeItem(idx)
    {
      // alert(idx)
      setTodolist(todolist.filter((val,inex)=> inex !=idx))
    }
    return(
      <li>
        {idx+1}  {value} <span onClick={()=>remoeItem(idx)}>&times;</span>
      </li>

    )
}
