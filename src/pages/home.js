import Navbar from '../Component/Navbar';
import Banner from '../Component/banner';
import Nearchart from '../Component/nearchart';
import RecentListing from '../Component/recentlisting';
import Ourservice from '../Component/ourservice';
import About from '../Component/about';
import Patners from '../Component/patners';
import Footer from '../Component/Footer';
import Testing2 from '../Component/testing2';

function Home() {
  return (

    <>
      <Navbar />
      <Banner/>
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <Testing2 />
      <About />
      <Patners />
      <Footer />
    </>
  );
}

export default Home;
