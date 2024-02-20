import React from 'react'

export default function ModalDelete({ children, show = false, closeable = true, onClose = () => {}}) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };
  return (
    <div>
      <div 
        show={show}
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 opacity-0"
        id="modalDelete"
      >
        <div
          className="relative w-[500px] bg-white dark:bg-box-dark rounded-lg shadow-lg"
          id="modalDeleteContent"
        >
          <div className="flex justify-between p-4 border-b dark:border-box-dark-up">
            <h3 className="text-lg font-semibold">Delete Genre</h3>
            <button
              className="text-gray-400 hover:text-gray-600"
              id="closeModalDelete"
            >
              <i className="uil uil-multiply"></i>
            </button>
          </div>
          <div className="p-4">
            <p>Are you sure you want to delete this genre?</p>
          </div>
          <div className="flex justify-end p-4">
            <button className="px-4 py-2 text-gray-500 hover:text-gray-600">
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
