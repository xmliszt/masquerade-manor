'use client';

import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { GlobeIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return theme === 'light' ? (
    <Button
      size='icon'
      onClick={() => {
        setTheme('dark');
      }}
    >
      <SunIcon />
    </Button>
  ) : theme === 'dark' ? (
    <Button
      size='icon'
      onClick={() => {
        setTheme('system');
      }}
    >
      <MoonIcon />
    </Button>
  ) : (
    <Button
      size='icon'
      onClick={() => {
        setTheme('light');
      }}
    >
      <GlobeIcon />
    </Button>
  );
}
