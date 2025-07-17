import React from 'react'
import UseAction from './UseAction'
import UseReducer from './UseReducer'
import { lazy } from 'react'
import { useState } from 'react';
import { Suspense } from 'react';

const LazyLoad = lazy(()=>import('./LazyLoad'));



const App = () => {
  const[load,setLoad] = useState();
  return (
    <div>

      {/* <UseAction /> */}

      {/* <UseReducer /> */}

      <h1>Lazy Loading</h1>
      {
        load?<Suspense fallback={<h3>loading...</h3>}><LazyLoad/></Suspense>:null
      }
      <button onClick={()=>setLoad(prev=>!prev)}>Load User</button>

    </div>
  )
}

export default App