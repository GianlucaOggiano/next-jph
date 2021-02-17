import Header from './Header';
import Seo from './Seo';

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
