import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function Component() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="/">Opening statement</FooterLink>
        <FooterLink href="/explanation">About</FooterLink>
        <FooterLink href="/vote">Vote</FooterLink>
        <FooterLink href="/license">Licensing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
