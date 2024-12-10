import { useRef , Suspense} from 'react';
import { useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function CubeMesh({position, args, still}) {
    const textureMap = useLoader(TextureLoader, 'src/assets/cube.jpg');
    const textureMap2 = useLoader(TextureLoader, 'src/assets/bars.jpg');

    const ref = useRef();
    useFrame(()=> ref.current.rotation.y += still ? 0 : 0.01);
  
    return (
        <Suspense fallback={null}>
            <mesh position={position} ref={ref}>
                <boxGeometry args={still ?  args.map(v=>v+0.2): args}/>
                <meshStandardMaterial map={still ? textureMap2 : textureMap} metalness={1} roughness={0.5}/>
            </mesh>
        </Suspense>
    );
}