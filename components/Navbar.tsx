import React, { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './ui/Button';

const navItems: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'Get Quote', href: '#/quote' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#/" className="flex items-center gap-2">
              <div className="bg-primary rounded-md p-1">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">Apex Moves</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="#/quote">
              <Button size="sm">Book Now</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Book Now</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};