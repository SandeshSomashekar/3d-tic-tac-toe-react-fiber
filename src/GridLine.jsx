import {  Suspense} from 'react';
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function GridLine({position, args}) {
    const textureMap = useLoader(TextureLoader, 'src/assets/bars.jpg');
    return (
        <Suspense fallback={null}>
            <mesh position={position}>
                <boxGeometry args={args}></boxGeometry>
                <meshStandardMaterial  map={textureMap} metalness={1} roughness={1}></meshStandardMaterial>
            </mesh>
        </Suspense>
    );  
}