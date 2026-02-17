import React from 'react'
import { Handle,Position } from 'reactflow'

const CustomNode = ({data}) => {
  return (
    <div style={{
      padding: "10px",
      border: "2px solid black",
      borderRadius: "10px",
      background: "white",
      width: "180px",
      textAlign: "center"
    }}>

        <Handle type='target' position={Position.Top} />
        <h3 style={{ fontWeight: "bold" }} >{data.label}</h3>
        <p style={{ fontSize: "12px" }}>Cusotm Node</p>
        <Handle type='source' position={Position.Bottom} />
      
    </div>
  )
}

export default CustomNode
