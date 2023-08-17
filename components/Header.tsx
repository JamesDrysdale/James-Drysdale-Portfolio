'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import DarkLightTheme from './DarkLightTheme';

const Header = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/articles', label: 'Articles' },
    { path: '/services', label: 'Services' },
    { path: '/connect', label: 'Connect' },
  ];

  return (
    <header className='fixed inset-x-0 top-0 z-40 py-5 transition duration-300 ease-in motion-reduce:transition-none '>
      <div className='relative  mx-auto box-border flex h-auto w-full max-w-6xl items-center px-10'>
        {/* Website Logo */}
        <div className=' h-auto'>
          <a href='#'>
            <Image
              className='h-12 w-12'
              src={`/images/${
                theme === 'dark' ? 'svgs/logo-dark.svg' : 'svgs/logo-light.svg'
              }`}
              alt='James Drysdale Brand Logo'
              height={48}
              width={48}
            />
          </a>
        </div>
        <section className='flex w-full justify-end'>
          <nav className='hidden items-center md:flex'>
            {routes.map((route) => (
              <Link href={route.path} key={route.label} className='h-full'>
                <p
                  className={`mx-2 text-lg ${
                    pathname === route.path && 'text-primary'
                  }`}
                >
                  {route.label}
                </p>
              </Link>
            ))}
          </nav>

          <div className='mx-3.5'>
            <DarkLightTheme />
          </div>

          <nav className='items-center md:hidden'>
            <Image
              src='/images/svgs/menu.svg'
              alt='mobile menu button'
              width='40'
              height='40'
            />
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
