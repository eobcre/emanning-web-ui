import useStore from "../store/useStore";
import { CgClose } from "react-icons/cg";
interface onCloseProps {
  onClose: () => void;
}

const Popup: React.FC<onCloseProps> = ({ onClose }) => {
  const {isDarkMode} = useStore();

  return (
    <div className='flex items-center justify-centermin-h-screen'>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
        <div className={`flex flex-col items-center rounded-lg shadow-lg p-10 w-[520px] ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          {/* <RiSendPlaneFill size={30} /> */}
          <h2 className={`custom-font text-[9rem] leading-[10rem] uppercase font-bold text-center mt-2 mb-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Thank<br />you</h2>
          <p className={`text-2xl temporary-font uppercase tracking-wider my-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Your message has been sent</p>
          <div className='flex justify-end'>
            <button onClick={onClose} className='flex justify-center items-center text-white uppercase bg-[#0d1225] rounded-full hover:opacity-80 mt-4 w-[60px] h-[60px]'>
            <CgClose size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
