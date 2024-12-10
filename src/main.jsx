import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none'  }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '4em', fontWeight: 500, letterSpacing: '-0.13em', fontFamily: 'monospace' }}>Tic Tac Toe in 3D</h1>
      </div>

      {/* <div style={{ position: 'absolute', height: '2rem', width: '5rem', top: '95%', left: '50%', transform: 'translate3d(-50%,-50%,0)'}}>
        <button>Reset Game</button>
      </div> */}
      <div style={{ position: 'absolute', bottom: '-90%', left: 20, width: '30rem', background: 'grey', opacity: 0.5, marginLeft: '1rem', marginBottom: '2rem'
      }}>
        <p style={{ padding: '2rem', fontSize: '20px' , color: '#380c26', fontWeight: 'bold'}}>Instructions:<br/>- Drag using mouse to reposition<br/>- Scroll using your mouse  to zoom in and out  </p>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)
