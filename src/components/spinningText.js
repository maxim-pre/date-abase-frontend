import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Text } from '@react-three/drei'

const SpinningText = () => {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.y += 0.001
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.z += 0.001
  })

  return (
    <Text
      ref={meshRef}
      color="#ffffff"
      position={[0, 0, 0]}
      fontSize={2}
      font="../static/images/Varela Round_Regular.json"
    >
      DaterBase
    </Text>
  )
}

export default SpinningText
