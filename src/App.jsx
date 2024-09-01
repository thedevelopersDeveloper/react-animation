import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return( 
    <Canvas>
      <MacContainer />
    </Canvas>
  )
}

export default App
