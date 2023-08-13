'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/articles', label: 'Articles' },
    { path: '/services', label: 'Services' },
    { path: '/connect', label: 'Connect' },
  ];

  return (
    <header className='bg-slate-800 px-5 '>
      <div className='prose prose-xl mx-auto flex place-items-center justify-between'>
        <div className=''>
          <a href='#'>
            <Image
              src='/images/logo.png'
              alt='James Drysdale Brand Logo'
              height={68}
              width={68}
            />
          </a>
        </div>
        <section className='flex'>
          <nav className='flex'>
            {routes.map((route) => (
              <Link href={route.path} key={route.label} className='h-full'>
                <p
                  className={`mx-2 flex items-center text-lg ${
                    pathname === route.path && 'text-primary'
                  }`}
                >
                  {route.label}
                </p>
              </Link>
            ))}
          </nav>
          <div className='mx-3.5 flex items-center justify-start'>
            *{/* <DarkLightTheme /> */}
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
