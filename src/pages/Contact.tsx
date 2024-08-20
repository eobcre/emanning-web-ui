import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useSendEmail } from '../hooks/useEmail';
import useStore from '../store/useStore';
import Button from '../components/Button';
import Popup from '../components/Popup';

interface Form {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [isHoverSend, setHoverSend] = useState(false);
  const { mutate: emailMutate } = useSendEmail();
  const { isModalOpen, openModal, closeModal, isDarkMode } = useStore();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onChange',
  });

  // submit form
  const onSubmit = (data: Form) => {
    console.log(data);

    emailMutate(data, {
      onSuccess: (res) => {
        console.log('Email sent successfully:', res);
        openModal();
      },
      onError: (error) => {
        console.error('Error sending email:', error);
      },
    });
  };

  // style
  const inputStyle = 'text-light-mode rounded-md outline-none p-4 w-full';
  const textareaStyle = 'rounded-md outline-none resize-none mt-6 p-4 w-full';

  return (
    <div className={`sm:rounded-md px-10 pb-10 w-full min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='pt-20 xl:px-36'>
        <h1 className={`custom-font text-5xl uppercase mb-14 sm:text-[8vw] xs:mb-0  ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            className={`mt-10 ${inputStyle}`}
            {...register('name', {
              required: 'Please enter your name.',
            })}
          />
          <p className={`mt-2 ${isDarkMode ? 'text-dark-mode' : 'text-red-600'}`}>{errors.name?.message as React.ReactNode}</p>
          <input
            type='email'
            id='email'
            placeholder='Email'
            className={`mt-6 ${inputStyle}`}
            {...register('email', {
              required: 'Please enter your email.',
            })}
          />
          <p className={`mt-2 ${isDarkMode ? 'text-dark-mode' : 'text-red-600'}`}>{errors.email?.message as React.ReactNode}</p>
          <textarea
            id='message'
            cols={30}
            rows={10}
            placeholder='Message'
            className={textareaStyle}
            {...register('message', {
              required: 'Please enter your message.',
            })}
          ></textarea>
          <p className={`mt-2 ${isDarkMode ? 'text-dark-mode' : 'text-red-600'}`}>{errors.message?.message as React.ReactNode}</p>
          <div className='flex justify-center items-center my-6'>
            <Button
              buttonName={isHoverSend ? <div className='flex justify-center items-center'><Icon icon="lucide:send" className='text-2xl' /></div> : 'Send'}
              className={`uppercase font-bold rounded-md p-3 w-[10rem] ${isDarkMode ? 'bg-dark-mode text-light-mode' : 'bg-light-mode text-white'}`}
              onMouseEnter={() => setHoverSend(true)}
              onMouseLeave={() => setHoverSend(false)}
            />
          </div>
        </form>
      </div>
      {isModalOpen && (
        <Popup
          onClose={() => {
            closeModal();
            reset();
          }}
        />
      )}
    </div>
  );
};

export default ContactPage;
