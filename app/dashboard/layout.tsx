'use client';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import MenuTitle from './components/menu-title';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import MainMenu from '@/dashboard/components/main-menu';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="sticky left-0 top-0 flex justify-between border-b border-border bg-background p-4">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
