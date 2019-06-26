import "../../scss/index.scss";
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  
  return(
    <>
      <Header />
        {props.children}
      <Footer/>
    </>
  );
}

export default Layout;