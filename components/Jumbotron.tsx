'use client';

import { scrollToSection } from '@/utils/utils';

export default function Jumbotron() {
  return (
    <div
      className='relative float-left clear-both h-screen w-full overflow-hidden'
      id='home'
    >
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[url("/images/banner.jpg")] bg-cover bg-center bg-no-repeat'>
          <div className='absolute inset-0 z-10 bg-black3 opacity-50'></div>
        </div>
      </div>
      <div className='absolute left-1/4 top-1/4 z-20 max-w-6xl translate-x-1/4 translate-y-1/4 text-center'>
        <div className='relative mb-9 inline-block h-52 w-52'>
          <div className='absolute inset-0 rounded-full bg-avatar bg-cover bg-center bg-no-repeat'></div>
          <div className='absolute inset-[-10px] z-[-1] rounded-full bg-natural opacity-10'></div>
        </div>
        <h3 className={`mb-4 text-5xl font-bold uppercase text-white`}>
          James <span>Drysdale</span>
        </h3>
        <p className=''>
          Software developer, UX/UI designer, mentor, artist and dog dad.
        </p>
      </div>
      <div className=''>
        <button onClick={() => scrollToSection('about')}>
          <i className=''></i>
        </button>
      </div>
    </div>
  );
}
