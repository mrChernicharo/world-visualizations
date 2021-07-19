import Link from 'next/link';
import { Container } from '../../styles/components/ui/HeadLinks';

interface HeaderLinkProps {
  location: string;
}

export const HeaderLinks = ({ location }: HeaderLinkProps) => {
  return (
    <Container>
      <Link href="/">
        <a className={location === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/currencies">
        <a className={location === '/currencies' ? 'active' : ''}>Currencies</a>
      </Link>
      <Link href="/countries">
        <a className={location === '/countries' ? 'active' : ''}>Countries</a>
      </Link>
      <Link href="/about">
        <a className={location === '/about' ? 'active' : ''}>About</a>
      </Link>
      {/* 
      <Link href="/contact">
        <a className={location === '/contact' ? 'active' : ''}>Contact</a>
      </Link> */}
    </Container>
  );
};
