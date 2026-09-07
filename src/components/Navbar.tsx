import React, { useState } from 'react';
import { Terminal, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme: initialTheme, toggleTheme: externalToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLight = document.documentElement.classList.contains('light');
      setTheme(isLight ? 'light' : 'dark');
    }
  }, []);

  const handleToggle = () => {
    if (externalToggle) {
      externalToggle();
    }
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (typeof document !== 'undefined') {
      if (nextTheme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    }
  };

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'AI LAB', href: '#lab' },
    { name: 'STACK', href: '#stack' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0d0e]/90 light:bg-white/90 backdrop-blur-md border-b border-neutral-800 light:border-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-6 h-6 border border-neutral-600 dark:border-neutral-400 flex items-center justify-center font-mono text-xs font-bold text-neutral-300 dark:text-neutral-200 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
            AG
          </div>
          <span className="font-mono text-xs tracking-wider uppercase font-semibold text-neutral-300 dark:text-neutral-200 light:text-neutral-800 group-hover:text-white transition-colors">
            AG / RUFATRONICS
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 bg-emerald-500 rounded-none animate-pulse ml-1" title="System Online" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-neutral-900 transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            aria-label="Toggle Theme"
            className="p-1.5 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-1.5 border border-neutral-800 light:border-neutral-300 text-neutral-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 light:border-neutral-200 bg-[#0c0d0e] light:bg-white px-4 pt-3 pb-6 space-y-3 font-mono text-xs">
          <div className="text-[10px] text-neutral-500 tracking-widest uppercase mb-2">// NAVIGATION SYSTEM</div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-neutral-900 light:border-neutral-100 text-neutral-300 light:text-neutral-800 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 text-[10px] text-neutral-500 flex items-center justify-between">
            <span>LOCATION: NIGERIA → GLOBAL</span>
            <span className="text-emerald-500">● ONLINE</span>
          </div>
        </div>
      )}
    </header>
  );
};
