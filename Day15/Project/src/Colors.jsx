import React, { useState } from 'react';

const Colors = () => {
  const [r, setR] = useState(100);
  const [g, setG] = useState(100);
  const [b, setB] = useState(100);

  const saveColor = () => {
    const color = { r, g, b };
    localStorage.setItem('color', JSON.stringify(color));
    alert('Color saved');
  };

  const getColor = () => {
    let saved = localStorage.getItem('color');
    if (saved) {
      const { r, g, b } = JSON.parse(saved);
      setR(Number(r));
      setG(Number(g));
      setB(Number(b));
    } else {
      alert('No color found in storage');
    }
  };

  const boxStyle = {
    width: '300px',
    height: '300px',
    background: `rgb(${r},${g},${b})`,
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
  };

  const labelStyle = { marginTop: '10px', fontWeight: 'bold' };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>🎨 RGB Color Picker</h2>

      <div style={boxStyle}></div>
      <p><strong>RGB:</strong> ({r}, {g}, {b})</p>

      <div>
        <p style={labelStyle}>Red: {r}</p>
        <input type="range" value={r} onChange={(e) => setR(e.target.value)} min={0} max={255} />
      </div>

      <div>
        <p style={labelStyle}>Green: {g}</p>
        <input type="range" value={g} onChange={(e) => setG(e.target.value)} min={0} max={255} />
      </div>

      <div>
        <p style={labelStyle}>Blue: {b}</p>
        <input type="range" value={b} onChange={(e) => setB(e.target.value)} min={0} max={255} />
      </div>

      <br />
      <button onClick={saveColor} style={{ marginRight: '10px', padding: '8px 16px' }}>Save Color</button>
      <button onClick={getColor} style={{ padding: '8px 16px' }}>Load Color</button>
    </div>
  );
};

export default Colors;
