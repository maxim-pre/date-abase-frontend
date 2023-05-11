import React from 'react'
import { Canvas } from 'react-three-fiber'
import SpinningText from './spinningText'

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SpinningText />
    </Canvas>
  )
}

export default ThreeScene
