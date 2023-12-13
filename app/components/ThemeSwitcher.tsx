'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-1">
      <button onClick={e => setTheme("light")} 
        className={`${"rounded-full p-2"} ${theme === 'light' ? "bg-neutral-300" : "bg-transparent"}`}>
        <LightIcon />
      </button>
      <button onClick={e => setTheme("dark")} 
        className={`${"rounded-full p-2"} ${theme === 'dark' ? "bg-neutral-700" : "bg-transparent"}`}>
        <DarkIcon />
      </button>
      <button onClick={e => setTheme("system")} 
        className={`${"rounded-full p-2"} ${theme === 'system' ? "bg-neutral-300 dark:bg-neutral-700" : "bg-transparent"}`}>
        <SystemIcon />
      </button>
    </div>
  )
}

const Icon = ({ children, ...props } : {children: React.ReactNode}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      className="stroke-black dark:stroke-white"
      {...props}
    >
      {children}
    </svg>
  );
};

const DarkIcon = () => {
  return (
    <Icon>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
  );
};

const LightIcon = () => {
  return (
    <Icon>
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </Icon>
  );
};

const SystemIcon = () => {
  return (
    <Icon>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </Icon>
  );
};

export default ThemeSwitcher