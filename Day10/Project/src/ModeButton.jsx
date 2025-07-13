import React from 'react'
import useLocalStorageMode from './useLocalStorageMode'

const ModeButton = () => {
  const[mode,setMode] =useLocalStorageMode();
  return (
    <>
      <button onClick={setMode}>
        <img 
          src={mode === 'light'
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJpdDAHcwsGr2CgMc2FOXwbIW_dnotmrSWQ&s'
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuO1wFpM-IfGppvA0v51hTLyHOqdjKkebSA&s'}
          alt="mode-icon"
          style={{ width: '60px', height: '60px' }}
        />
      </button>

    </>
  )
}

export default ModeButton