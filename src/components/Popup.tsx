interface onCloseProps {
  onClose: () => void;
}

const Popup: React.FC<onCloseProps> = ({ onClose }) => {
  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-1/3'>
          <h2 className='text-xl font-bold mb-4'>Thank you!</h2>
          <p className='mb-4'>I will get back to you shortly.</p>
          <div className='flex justify-end'>
            <button onClick={onClose} className='text-gray-700 bg-gray-300 rounded mr-2 px-4 py-2'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
