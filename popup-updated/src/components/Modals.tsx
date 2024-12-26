import React from 'react'
import { FC } from 'react';
interface Props{
  handleModalOpen:()=>void
  handleAccept:()=>void
}
const Modals:FC<Props> = ({handleModalOpen,handleAccept}) => {
const handleOutside =(e)=>{
  if(e.target.className === "modal-container"){
    handleModalOpen()
  }
}
  return (
<div className='modal-container' onClick={handleOutside}>
  <div className='modal-content'>
<button className='close-button' onClick={handleModalOpen}>close</button>
<div className='text-modal-div'>
<p className='text-modal'>
  this is inside popup
</p>
</div>
<button onClick={handleAccept}>Accept</button>
  </div>

</div>
  )
}

export default Modals
