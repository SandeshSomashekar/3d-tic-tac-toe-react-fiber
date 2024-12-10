import React from "react";
import { DefaultGridData, DisplayConstants, WinningCombinations } from "./DisplayConstants";

function GameInfo({ gameBoard, nextTurn, winner, resetGameBoard }) {
    return (
      <>
        <div className='title'>
          <div>Tic Tac Toe in 3D</div>
          {<button class="restartButton" onClick={resetGameBoard}>Reset</button>}
          {nextTurn === DisplayConstants.Sphere && (<h6>Now Player A (Sphere)</h6>)}
          {nextTurn === DisplayConstants.Cube && (<h6>Now Player B (Cube)</h6>)}
        </div>
      </>
    );
  }

export default React.memo(GameInfo);