import type { NextPage } from 'next';
import MyHead from '../components/MyHead';
import Navbar from '../components/Layout/Navbar';
import Body from '../components/Layout/Body';
import Landing from '../components/Section/Landing';
import Border from '../components/Layout/Border';
import Experiences from '../components/Section/Experiences';
import AboutMe from '../components/Section/AboutMe';
import Projects from '../components/Section/Projects';
import Footer from '../components/Section/Footer';
const Home: NextPage = () => {
  return (
    <>
      <MyHead />
      <Navbar location="home" />
      <Landing />
      <Body>
        <Border>
          <AboutMe />
          <Projects />
          <Experiences />
        </Border>
      </Body>

      <Footer />
    </>
  );
};
export default Home;
