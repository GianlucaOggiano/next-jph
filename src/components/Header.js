import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className='container header__nav'>
        <div className='header__nav-logo'>
          <h3>
            <Link href='/'>Next Jph</Link>
          </h3>
        </div>
        <ul className='header__nav-items'>icons goes here</ul>
      </nav>
    </header>
  );
};

export default Header;
