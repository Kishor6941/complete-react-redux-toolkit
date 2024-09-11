import React from 'react'
import Counter from './component/Counter'

import { useDispatch, useSelector } from 'react-redux'
import Navbar from './component/Navbar'
import Product from './component/Product'
import { Routes,Route } from 'react-router-dom'
import ViewCart from './component/viewCart/ViewCart'
import MainComp from './component/MainComp'
import Todo from './component/Todo/Todo'
import { fetchUserList } from './redux-toolkit/slice/UserListSlice'
const App = () => {
 const dispatch =  useDispatch()
 let state = useSelector(state => state)
 console.log(state,'state');
 if(state.userList.isLoading) {
  return <div>Loading......</div>
 }
  return (
    <div className='app'>
      {/* <div>
        <button onClick={()=>dispatch({type : 'INCREMENT'})}>Increment</button>
      </div>
      <Counter/>
      <div>
        <button onClick={()=>dispatch({type : 'DECREMENT'})}>Decrement</button>
      </div> */}
      <button onClick={() => dispatch(fetchUserList())}>Fetch User List</button>
      <ul>
      { state?.userList?.data?.data?.length && 
        state?.userList?.data.data.map((ele) => <li key={ele?.id}>{ele?.name}</li>)
      }
      </ul>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    </div>
  )
}

export default App