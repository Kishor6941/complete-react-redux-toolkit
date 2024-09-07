import React from 'react'
import Counter from './component/Counter'
import "./App.css"
import { useDispatch } from 'react-redux'
const App = () => {
 const dispatch =  useDispatch()
  return (
    <div className='app'>
      <div>
        <button onClick={()=>dispatch({type : 'INCREMENT'})}>Increment</button>
      </div>
      <Counter/>
      <div>
        <button onClick={()=>dispatch({type : 'DECREMENT'})}>Decrement</button>
      </div>
    </div>
  )
}

export default App