import { useState,useEffect } from "react";


function useLocalStorageMode(key='mode', initialValue = 'light') {
    const[mode,setMode] = useState(()=>{
        const saved = localStorage.getItem(key);
        return saved | initialValue;
    });
    useEffect(()=>{
        localStorage.setItem(key,mode);
    },[key,mode])
    const handleMode=()=>{
        setMode(prev => prev=='light'?'dark':'light');
    }
    return [mode,handleMode];
}

export default useLocalStorageMode;