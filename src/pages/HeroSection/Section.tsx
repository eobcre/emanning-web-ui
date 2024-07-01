import { GoFileDirectory } from 'react-icons/go';

const Section = () => {
  const divStyle = 'bg-[#333333] bg-opacity-50 rounded -mt-3 sm:-mt-4 p-20 md:-mt-5 lg:-mt-6';
  const h1Style = 'custom-text text-5xl font-bold sm:text-[8vw]';

  return (
    <div className='bg-[#0D1225] px-10 pb-20 md:pl-10 w-full md:pr-48'>
      <div className='xl:px-36'>
        <div className='pt-20'>
          <h1 className={h1Style}>GitHub</h1>
          {/* latest */}
          <div className={divStyle}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='border rounded px-6 py-5'>
                <div className='flex justify-between items-center gap-2'>
                  <span>Chat GPT Clone</span>
                  <GoFileDirectory size={28} />
                </div>
                <div className='pt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim repellat est odio ab iure rerum quas
                    officia deserunt a harum sequi laboriosam cupiditate, earum totam, velit aut, eaque quisquam.
                  </p>
                </div>
              </div>
              <div className='border rounded px-6 py-5'>
                <div className='flex justify-between items-center gap-2'>
                  <span>Chat GPT Clone</span>
                  <GoFileDirectory size={28} />
                </div>
                <div className='pt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim repellat est odio ab iure rerum quas
                    officia deserunt a harum sequi laboriosam cupiditate, earum totam, velit aut, eaque quisquam.
                  </p>
                </div>
              </div>
              <div className='border rounded px-6 py-5'>
                <div className='flex justify-between items-center gap-2'>
                  <span>Chat GPT Clone</span>
                  <GoFileDirectory size={28} />
                </div>
                <div className='pt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim repellat est odio ab iure rerum quas
                    officia deserunt a harum sequi laboriosam cupiditate, earum totam, velit aut, eaque quisquam.
                  </p>
                </div>
              </div>
              <div className='border rounded px-6 py-5'>
                <div className='flex justify-between items-center gap-2'>
                  <span>Chat GPT Clone</span>
                  <GoFileDirectory size={28} />
                </div>
                <div className='pt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim repellat est odio ab iure rerum quas
                    officia deserunt a harum sequi laboriosam cupiditate, earum totam, velit aut, eaque quisquam.
                  </p>
                </div>
              </div>
            </div>
            {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
