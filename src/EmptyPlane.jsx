import { Html } from "@react-three/drei"

export default function EmptyPlane({position, args, handleGridItemClick, showDiv, handleResetClick}) {
    function handleClick(position) {
        handleGridItemClick(position);
    }
    return (
        <>
        <mesh position={position} onPointerDown={()=>{handleClick(position)}}>
            <planeGeometry args={args}></planeGeometry>
            <meshLambertMaterial transparent={true} opacity={0}></meshLambertMaterial>
            {
                showDiv && (
                    <Html center distanceFactor={10}>
                        <div class="content" onClick={handleResetClick}>
                        Reset Game
                        </div>
                    </Html>   
                )
            }
        </mesh>
        </>
    );  
}