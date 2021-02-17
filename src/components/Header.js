import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const isScrolled = () => {
    window.scrollY > 30 ? setScrolled(true) : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isScrolled);
    return () => window.removeEventListener('scroll', isScrolled);
  }, []);

  return (
    <header className={scrolled && 'active'}>
      <nav className='container header__nav'>
        <div className='header__nav-logo'>
          <h3>
            <Link href='/'>Next Jph</Link>
          </h3>
        </div>
        <ul className='header__nav-items'>
          <li>
            <a
              href='https://github.com/GianlucaOggiano/next-jph'
              target='_blank'
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
