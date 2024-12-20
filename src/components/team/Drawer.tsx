import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import Button from './Button'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000]">
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 transform translate-x-0"
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <IoMdClose size={24} />
          </Button>
        </div>
        <div className="p-6 overflow-y-auto h-full">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Drawer

