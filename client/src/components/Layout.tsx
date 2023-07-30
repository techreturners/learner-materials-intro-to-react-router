import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  children: object;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
