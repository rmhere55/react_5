import { Canvas } from '@react-three/fiber';
import './style.css'; // Fix CSS import
import Cyl from './Cyl';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import { Resolution } from 'postprocessing';

const App = () => {
  return (
    <>
      <Canvas camera={{ fav: 30 }}>
        <ambientLight />
        <Cyl />

        {/* Post-processing Effects */}
        <EffectComposer>
          {/* <ToneMapping /> */}
          <Bloom
            mipmapBlur
            intensity={1.5} // Adjust bloom intensity to suit your design
            luminanceThreshold={0} // Adjust to mask out darker elements
            luminanceSmoothing={36} // Smooth out the threshold
            // resolutionX={Resolution.AUTO_SIZE}
            // resolutionY={Resolution.AUTO_SIZE}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
