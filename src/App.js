import React, {useState, useEffect} from 'react';
import Character from "./components/Character"
import axios from "axios"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] = useState([])

useEffect(()=>{
  const fetchData = () =>{
    axios.get("https://swapi.dev/api/people").then((res)=>{
      // console.log(res.data.result)
      setData(res.data.results)
    }).catch((err)=>{
      console.log(err);
    })
  }
  fetchData();

  return ()=>{

  }
}, [])

  return (
    <div className="App">
    <h1 className="Header">Characters</h1>   
    {data.map(( item, index)=>{
      
      return (
           <Character data={data[index]} />
           
      );
       
    })}
      
    </div>
    
  );
}
export default App;
