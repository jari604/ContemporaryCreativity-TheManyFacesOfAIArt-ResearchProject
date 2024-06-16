'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TUDelftLogoDescriptor from 'public/TU-Delft/logo-descriptor-png/TUDelft_logo_descriptor_rgb.png';

function GlobalNav() {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand className="flex flex-row flex-wrap justify-center md:justify-normal" as={Link} href="/">
        <Image
          src={TUDelftLogoDescriptor}
          alt="TU Delft - Delft University of Technology - logo"
          className="w-52 flex-initial"
        />
        <span className="flex-none text-xl font-semibold">Contemporary Creativity</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active={pathname === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/explanation" active={pathname === '/explanation'}>
          Uitleg
        </Navbar.Link>
        <Navbar.Link as={Link} href="/vote" active={pathname === '/vote'}>
          Stemmen
        </Navbar.Link>
        <Navbar.Link as={Link} href="/license" active={pathname === '/license'}>
          Licentie
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact" active={pathname === '/contact'}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNav;
