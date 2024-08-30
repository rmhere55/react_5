import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"


const Cyl = () => {
  const tex = useTexture("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1")
   let cyl = useRef(null)
console.log(tex)
useFrame((state, delta)=>{
 cyl.current.rotation.y += delta
})
  return (
  <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cyl} >   
  <cylinderGeometry args={[2 , 2 , 2 , 30 , 30 , true]}/>
  {/* <CylinderGeometry/> dont use the three cylender geometry */}
 {/* <meshStandardMaterial/>/ */}
 <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
 </mesh>
 </group>
  )
}

export default Cyl