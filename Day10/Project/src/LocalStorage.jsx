import React from 'react'
import useLocalStorageMode from './useLocalStorageMode'

const LocalStorage = () => {
    const[mode,setMode] = useLocalStorageMode();
  return (
    <div>
        <button onClick={setMode}>LocalStoragemode : {mode ==='light'? 'dark' :'light'}</button>
    </div>
  )
}

export default LocalStorage