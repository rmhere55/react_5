import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import img from './assets/imge.png';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Cyl = () => {
  const tex = useTexture(img);
  const cyl = useRef(null);

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1, 0.2]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 40, 40, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// export default function App() {
//   return (
//     <div className="cylinder-container">
//       <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
//         <Cyl />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
 export default Cyl;
