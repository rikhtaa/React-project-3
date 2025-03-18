import GamePlay from "./components/GamePlay"
import StartGame from "./components/StartGame"
import { useState } from "react"
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
//   It flips (toggles) isGameStarted:
// If isGameStarted is false → it becomes true. vice versa
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev)
  }
  //toggle is just a name we give to toggleGamePlay.
// Now, StartGame receives this function and can use it
  return <>{ isGameStarted ? <GamePlay/> :
  <StartGame toggle={toggleGamePlay}/>} </>
  
}

export default App
