import React from 'react'

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`bg-black/70 w-full h-screen z-50 absolute top-0 left-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`} onClick={onClose}>

    </div>
  )
}

export default Popup