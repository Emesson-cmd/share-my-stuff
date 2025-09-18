'use client';

import { usePathname } from 'next/navigation';
import { NavbarCollapse, NavbarLink } from 'flowbite-react';

export default function NavLinks() {
  const currentPath = usePathname();

  return (
    <NavbarCollapse>
      <NavbarLink href="/posts" active={currentPath === '/posts'}>
        Posts
      </NavbarLink>
      <NavbarLink href="/users" active={currentPath === '/users'}>
        Authors
      </NavbarLink>
      <NavbarLink href="/about" active={currentPath === '/about'}>
        About
      </NavbarLink>
    </NavbarCollapse>
  );
}
