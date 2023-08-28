'use client';

import { scrollToSection } from '@/utils/utils';

export default function Jumbotron() {
  return (
    <div className='relative h-screen text-center'>
      <div className='absolute inset-0 h-full w-full overflow-hidden bg-jumbobg bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full items-center justify-center bg-black3/40'>
          <div>
            <div className='relative mb-4 inline-block h-28 w-28 md:mb-9 md:h-36 md:w-36 lg:h-48 lg:w-48'>
              <div className='absolute inset-0 z-20 rounded-full bg-avatar bg-cover bg-center bg-no-repeat'></div>
              <div className='absolute inset-[-10px] z-10 rounded-full bg-natural opacity-10'></div>
            </div>
            <h2 className='mb-3 text-2xl font-extrabold uppercase text-white md:text-3xl lg:mb-4 lg:text-5xl'>
              James <span className='text-primary'>Drysdale</span>
            </h2>
            <h3 className='mb-6 px-10 text-base font-medium text-white md:text-2xl'>
              Software developer, UX/UI designer, mentor, artist and dog dad.
            </h3>
            <button
              type='button'
              className='rounded border-2 border-white2 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white2 transition duration-150 ease-in-out hover:border-primary hover:bg-black3/50 hover:text-primary focus:border-white2 focus:text-primary focus:outline-none focus:ring-0 active:border-white2 active:text-primary dark:hover:bg-black3/50'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <a href='#about'>Get to know me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
