import React from 'react'

const Popup = ({ isOpen, onClose, message }) => {
  return (
    <div className={`bg-black/70 w-full h-screen z-50 absolute top-0 left-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`} onClick={onClose}>
        <div className='bg-gray-100 rounded-lg p-8 w-[50%] border-2 border-rose-400' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-xl font-medium text-rose-500 mb-4 whitespace-pre-wrap'>{message}💌</h2>
        </div>
    </div>
  )
}

export default Popup