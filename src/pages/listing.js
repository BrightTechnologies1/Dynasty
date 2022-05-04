// import logo from '../logo.svg';
import '../App.css';
import Navbar from '../component/navbar';
import Banner2 from '../component/banner2';
import Collection from '../component/collection';
import About from '../component/about';
import Footer from '../component/footer';
import { Collection } from 'react-bootstrap-icons';

function ListingPage() {
  return (

    <div className=''>
      <Navbar />
      <Banner2 />
      <Collection />
      <Footer />
    </div>
  );
}

export default ListingPage;
