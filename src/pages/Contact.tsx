import { useForm } from 'react-hook-form';
import { useSendEmail } from '../hooks/useEmail';
import useStore from '../store/useStore';
import TypeWrite from '../components/TypeWrite';
import Button from '../components/Button';
import Popup from '../components/Popup';

interface Form {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { mutate: emailMutate } = useSendEmail();
  const { isModalOpen, openModal, closeModal } = useStore();

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
  const h1Style = 'custom-text text-5xl font-bold sm:text-[8vw]';
  const inputStyle = 'rounded-md outline-none p-4 w-full';
  const textareaStyle = 'rounded-md outline-none resize-none mt-6 p-4 w-full';

  return (
    <div className='bg-[#0D1225] px-10 py-20 w-full min-h-screen md:pl-10 md:pr-48'>
      <TypeWrite text={['Contact.']} delay={200} />
      <div className='pt-20 xl:px-36'>
        <h1 className={h1Style}>Say Hello</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'
        >
          <input
            type='text'
            id='name'
            placeholder='Name'
            className={`mt-10 ${inputStyle}`}
            {...register('name', {
              required: 'Please enter your name.',
            })}
          />
          <p className='text-gray-500 mt-2'>{errors.name?.message as React.ReactNode}</p>
          <input
            type='email'
            id='email'
            placeholder='Email'
            className={`mt-6 ${inputStyle}`}
            {...register('email', {
              required: 'Please enter your email.',
            })}
          />
          <p className='text-gray-500 mt-2'>{errors.email?.message as React.ReactNode}</p>
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
          <p className='text-gray-500 mt-2'>{errors.message?.message as React.ReactNode}</p>
          <Button
            buttonName='Send'
            className='custom-text text-lg font-bold border border-blue-300 rounded-md mt-5 px-6 py-3 hover:text-[#97dffc] hover:duration-300'
          />
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
