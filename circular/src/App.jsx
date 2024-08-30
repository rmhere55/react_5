import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import   "style.css
import "./style.css"
import { OrbitControls } from '@react-three/drei'
// import { CylinderGeometry } from 'three'
import Cyl from './Cyl'
import {EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'


const App = () => {
  return ( <>
    <Canvas camera={{fav : 25}}>
      {/* <OrbitControls/> */}
      <ambientLight/>
      {/* <ambientLight/> */}
  <Cyl/>

  <EffectComposer>
{/* your effects go here */}
  <Bloom
  mipmapBlur
    intensity={7.0} // The bloom intensity.
    // blurPass={undefined} // A blur pass.
    // kernelSize={KernelSize.LARGE} // blur kernel size
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.36}
     // smoothness of the luminance threshold. Range is [0, 1]
    // luminanceSmoothing = {0} //kk
     // mipmapBlur={false} // Enables or disables mipmap blur.
    // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
    // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
  />
  <ToneMapping/>
</EffectComposer>

    </Canvas>
    </>
  )
}

export default App


// mesh is object  mesh need 2 think is boxGeometry  second is  meshbasicMatrial