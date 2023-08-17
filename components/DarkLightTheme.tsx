'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkLightTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label htmlFor='toggle-button' className='flex cursor-pointer items-center'>
      <Image
        src={`/images/svgs/${theme === 'dark' ? 'light' : 'dark'}.svg`}
        alt={`Current theme: ${
          theme === 'dark' ? 'dark' : 'light'
        } mode. Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        height={35}
        width={35}
        onClick={toggleTheme}
      />
    </label>
  );
};

export default DarkLightTheme;
