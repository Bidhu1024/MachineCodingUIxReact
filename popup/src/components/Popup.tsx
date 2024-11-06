import { FC } from "react";

interface Props{
  isOpen:boolean;
  closeModal:()=>void

}

const Popup:FC<Props> = ({isOpen,closeModal}) => {

  if(!isOpen) return null
  return (
    <div className="modal-container">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, officia est. Vel corporis ex officia blanditiis, sint ut voluptate aut? Molestias magni quis, ad laboriosam possimus vel eaque neque architecto.</p>
      <button onClick={closeModal}>close</button>
    </div>
  )
}

export default Popup
