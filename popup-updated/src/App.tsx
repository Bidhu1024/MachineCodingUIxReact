import { useState } from "react";
import "./App.css";
import Modals from "./components/Modals";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleAccept = () => {
    setOpen(false);
    setAccept(true);
  };
  return (
    <div className="modal-main">
      {!accept && (
        <button className="modal-open-btn" onClick={handleModalOpen}>
          Open modal
        </button>
      )}
      {open && (
        <Modals handleModalOpen={handleModalOpen} handleAccept={handleAccept} />
      )}
      {accept && <span>Offer Accepted</span>}
    </div>
  );
}

export default App;
