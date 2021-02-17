import Seo from './Seo';

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      {children}
    </>
  );
};

export default Layout;
