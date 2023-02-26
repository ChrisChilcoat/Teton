import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'

TtDialog.propTypes = {
  isOpen: PropTypes.bool,
  fullScreen: PropTypes.bool,
  setIsDialogOpen: PropTypes.func
}

TtDialog.defaultProps = {
  isOpen: false, 
  fullScreen: false,
  setIsDialogOpen: null
}

export default function TtDialog({
  isOpen,
  fullScreen,
  setIsOpen,
  children
}) {

  function handleCloseModal() {
    setIsOpen(false)
  }
  
  const className = {
    base: (fullScreen ? "p-0 md:p-4" : "") + " flex h-screen items-center justify-center text-center",
    panel: (fullScreen ? "max-w-screen-2xl h-full md:rounded-2xl" : "max-w-md rounded-2xl") + " p-6 w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all",
    backdrop: "fixed inset-0 bg-black bg-opacity-25"
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`${className.backdrop}`} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className={`${className.base}`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`${className.panel}`}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
