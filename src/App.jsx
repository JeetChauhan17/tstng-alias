import {useContext, useState} from "react"
import { CountContext } from "./context"

function App() {
  return (
    <div>
        <Count />
    </div>
  )
}

function Count({setCount}){

  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer () {
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decreast</button>
  </div>
}


export default App

