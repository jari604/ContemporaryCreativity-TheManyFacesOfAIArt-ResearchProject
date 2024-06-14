'use client';

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';

function GlobalNav() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Contemporary Creativity: The Many Faces of AI Art
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/explanation">
          Uitleg
        </NavbarLink>
        <NavbarLink href="/vote">Stemmen</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

// function GlobalNav() {
//   return (
//     <nav
//       className="sticky top-0 grid h-16 w-full grid-cols-2 items-center justify-center bg-[hsla(0,0%,100%,.8)] px-8 py-4 shadow-bottom backdrop-blur-sm backdrop-saturate-150">
//       <div className="flex justify-start text-2xl text-gray-900">
//         <Link href="/">Next 14</Link>
//       </div>
//
//       <div className="flex justify-end gap-x-2 text-gray-500">
//         <Link href="/">Home</Link>
//         <Link href="/explanation">Uitleg</Link>
//         <Link href="/vote">Stemmen</Link>
//         {/* <Link href="/example">Example</Link>
//         <a
//           className="ml-2 flex items-center gap-x-1"
//           href="https://github.com/bysxx/next-ts-template-tailwind"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <span>Source Code</span>
//         </a> */}
//       </div>
//     </nav>
//   );
// }

export default GlobalNav;
