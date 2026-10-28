import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme: propsTheme, toggleTheme: propsToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLight = document.documentElement.classList.contains('light');
      setTheme(isLight ? 'light' : 'dark');
    }
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
      if (nextTheme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    }
    if (propsToggle) {
      propsToggle();
    }
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Name */}
        <a
          href="#"
          className="font-heading font-bold text-base sm:text-lg tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] px-1 py-0.5 rounded-sm"
        >
          Ahmad Garba Adamu
        </a>

        {/* Right: Desktop Links & Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-mono text-xs text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[var(--text)] transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] px-1 rounded-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={handleToggle}
            aria-label="Toggle dark/light theme"
            className="p-2.5 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            className="p-2.5 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2.5 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 pt-2 pb-6 space-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-2 border-b border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition-colors min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
