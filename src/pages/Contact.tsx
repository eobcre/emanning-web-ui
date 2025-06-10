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
  const textareaStyle = 'text-light-mode rounded-md outline-none resize-none mt-6 p-4 w-full';

  return (
    <div className={`lg:rounded-md px-6 pb-10 w-full min-h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='pt-10 md:pt-20 lg:px-36'>
        <h1 className={`flex flex-col text-6xl sm:text-[11vw] tracking-tighter xs:mb-0 md:mb-10 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
          <span className={`text-[7rem] md:text-[10rem] ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>04</span>
          <span className='custom-500-font'>GET IN<br />TOUCH .</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='lg:w-1/2'>
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
          />
          <p className={`mt-2 ${isDarkMode ? 'text-dark-mode' : 'text-red-600'}`}>{errors.message?.message as React.ReactNode}</p>
          <div className='flex justify-center items-center my-6'>
            <Button
              buttonName={isHoverSend ? <Icon icon='ri:send-plane-2-fill' width='24' height='24' /> : <Icon icon='ri:send-plane-2-line' width='24' height='24' />}
              className={`rounded-full p-4 ${isDarkMode ? 'bg-dark-mode text-light-mode' : 'bg-light-mode text-white'}`}
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
