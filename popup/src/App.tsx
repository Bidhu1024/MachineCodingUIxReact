import Popup from "./components/Popup";
import "./App.css"
import { useState } from "react";
function App() {
  const [showModal,setShowModal] = useState<boolean>(false)

  return (
    <>
    <button onClick={()=>setShowModal(true)}>open modal</button>
    <Popup isOpen={showModal} closeModal={()=>setShowModal(false)} />
    </>
  )
}

export default App;
