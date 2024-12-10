import { useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Color, TextureLoader } from "three";
import { useFrame } from '@react-three/fiber'

export default function SphereMesh({position, args, still}) {
    const textureMap = useLoader(TextureLoader, 'src/assets/sphere.jpg');
    const textureMap2 = useLoader(TextureLoader, 'src/assets/bars.jpg');

    const ref = useRef();
    useFrame(()=> ref.current.rotation.x += (still ? 0 : 0.01));

    return (
        <Suspense fallback={null}>
            <mesh position={position} ref={ref}>
                <sphereGeometry args={still ?  args.map(v=>v+0.2): args} ></sphereGeometry>
                <meshStandardMaterial map={still ? textureMap2 : textureMap} metalness={1} roughness={0.5}  />
            </mesh>
        </Suspense>
    );
}   