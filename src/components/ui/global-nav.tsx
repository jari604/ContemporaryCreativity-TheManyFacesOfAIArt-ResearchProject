'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import TUDelftLogo from 'public/TU-Delft/logo-descriptor-png/TUDelft_logo_descriptor_rgb.png';

function GlobalNav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <Image src={TUDelftLogo} width={200} alt="TU Delft - Delft University of Technology - logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Contemporary Creativity: The Many Faces of AI Art
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/explanation">
          Uitleg
        </Navbar.Link>
        <Navbar.Link as={Link} href="/vote">
          Stemmen
        </Navbar.Link>
        <Navbar.Link as={Link} href="/license">
          Licentie
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNav;
