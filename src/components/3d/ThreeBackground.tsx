
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const NeonSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    sphereRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
  });
  
  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        emissive="#9b87f5"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <NeonSphere />
        </Float>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
