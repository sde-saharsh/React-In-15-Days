import React from 'react'
import UseAction from './UseAction'
import UseId from './UseId'
import ToggleComponent from './ToggleComponent'
import ModeButton from './ModeButton'
import LocalStorage from './LocalStorage'
import { UserContext } from './context/UserContext'
import A from './components/A'

const App = () => {
  const name = 'saharsh';
  return (
    <div>

        {/* <UseAction />
        <UseId />
        <ToggleComponent />
        <Modebutton />
        <LocalStorage /> */}

        {/* <ModeButton /> */}

        {/* App.jsx → A.jsx → B.jsx → C.jsx → D.jsx  */}
          <UserContext.Provider value={name}>
            <A />
          </UserContext.Provider>


    </div>
  )
}

export default App