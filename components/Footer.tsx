import React from 'react';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground mt-auto">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Apex Moves</span>
            </div>
            <p className="text-sm">
              Moving lives forward, one box at a time. Professional, reliable, and AI-optimized moving services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:text-primary transition-colors">Residential Moving</a></li>
              <li><a href="#/services" className="hover:text-primary transition-colors">Commercial Relocation</a></li>
              <li><a href="#/services" className="hover:text-primary transition-colors">Long Distance</a></li>
              <li><a href="#/services" className="hover:text-primary transition-colors">Storage Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@apexmoves.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Logistics Way, Transport City
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Apex Moves Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};