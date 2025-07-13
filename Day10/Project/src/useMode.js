import {useState} from 'react';

function useMode(initialValue = 'light') {
    const[mode,setmode] = useState(initialValue);

    const toggleMode = () =>{
        setmode(prevMode => prevMode === 'light' ? 'dark' :'light');
    }

    return [mode,toggleMode];
}

export default useMode;