// ToggleComponent.jsx
import React from 'react';
import useToggle from './useToggle';

const ToggleComponent = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <h2>Toggle Example</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This text is toggled!</p>}
    </div>
  );
};

export default ToggleComponent;
