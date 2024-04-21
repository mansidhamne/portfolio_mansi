import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, Preload, useTexture, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='indigo'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading />
        <Decal
          position={[0,0,1]}
          rotation={[2* Math.PI, 0, 6.25]}
          map={decal}
          scale={1}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, name, darkMode }) => {
  return (
    <>
      
      <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
        style={{ height: '100px'}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}
        />
          <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all />
      </Canvas>
      <div className={`mx-8`}>
        <h3 className={`${darkMode ? 'text-orange-300/80' : 'text-slate-700'} font-semibold text-center`}>
          {name}
        </h3>
      </div>
    </>
    
  )
}

export default BallCanvas