import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Text3D } from "@react-three/drei";

import "./App.css";
import space from "./assets/rogland_clear_night_4k.exr";
import GridLine from "./GridLine";
import EmptyPlane from "./EmptyPlane";
import CubeMesh from "./Cube";
import SphereMesh from "./SphereMesh";
import GameInfo from "./GameInfo";
import WinnerLine from "./WinnerLine";

import { DefaultGridData, DisplayConstants, WinningCombinations } from "./DisplayConstants";

function App() {
  const [allPositions, setAllPositions] = useState(DefaultGridData);
  const [currentShape, setCurrentShape] = useState(DisplayConstants.Sphere);
  const [winner, setWinner] = useState();
  const [winningPos, setWinningPos] = useState([]);

  function handleGridItemClick(clickedPosition) {
    const latest = allPositions.map((item) => {
      if (item.pos.toString() === clickedPosition.toString()) {
        return {
          ...item,
          show:
            currentShape === DisplayConstants.Cube
              ? DisplayConstants.Cube
              : DisplayConstants.Sphere,
        };
      } else {
        return item;
      }
    });
    setAllPositions(
      latest
    );
    checkForWinner(latest);
    setCurrentShape(
      currentShape === DisplayConstants.Cube
        ? DisplayConstants.Sphere
        : DisplayConstants.Cube
    );
  }

  function checkForWinner(latestPositions) {
    for (let i = 0; i < WinningCombinations.length; i++) {
      const [a,b,c] = WinningCombinations[i].map(i => latestPositions[i].show);
      
      if( 
        a !== DisplayConstants.Empty && 
        b !== DisplayConstants.Empty && 
        c !== DisplayConstants.Empty &&
        a === b && a === c
      ){
        setWinner(currentShape);
        setWinningPos(WinningCombinations[i]);
      }
    }
  }

  function resetGame() {
    setAllPositions(DefaultGridData);
    setWinner();
    setWinningPos([]);
  }

  return (
    <>
    <Canvas shadows>
      <directionalLight position={[0, 0, 2]} intensity={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-150, 300, -300]} intensity={0.9} />
      <OrbitControls maxDistance={40} enableDamping />
      <Environment background={true} files={space} />
      {/* <EmptyPlane
          position={[-1, 4, 0]}
          arg={[[0.5, 48, 48]]}
          handleGridItemClick={handleGridItemClick}
          showDiv={true}
          handleResetClick={resetGame}
      ></EmptyPlane> */}

      <group>
        <GridLine args={[0.25, 6, 1]} position={[1, 1, 1]}></GridLine>
        <GridLine args={[0.25, 6, 1]} position={[-1, 1, 1]}></GridLine>
        <GridLine args={[6, 0.25, 1]} position={[0, 2, 1]}></GridLine>
        <GridLine args={[6, 0.25, 1]} position={[0, 0, 1]}></GridLine>     
      </group>

      {
        allPositions.map((box, index) => (
        <>
          {(box.show === DisplayConstants.Empty) && (!winner) && (
            <EmptyPlane
              position={box.pos}
              arg={[[0.5, 48, 48]]}
              handleGridItemClick={handleGridItemClick}
              showDiv={false}
            ></EmptyPlane>
          )}
          {box.show === DisplayConstants.Sphere && (
            <SphereMesh position={box.pos} args={[0.5, 48, 48]} still={winningPos.indexOf(index) > -1}></SphereMesh>
          )}
          {box.show === DisplayConstants.Cube && (
            <CubeMesh position={box.pos} args={[1, 1, 1]} still={winningPos.indexOf(index) > -1}></CubeMesh>
          )}
        </>
      ))}

      {
          winner ? <WinnerLine  positions={allPositions.map(p=>p.pos)} positionIndices={winningPos}/> : null
      }

      
    </Canvas>
    <GameInfo nextTurn={currentShape} winner={winner} resetGameBoard={resetGame}/>
    </>
  );
}

export default App;
