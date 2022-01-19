import type { NextPage } from "next";
import MyHead from "../components/MyHead";
import Navbar from "../components/Layout/Navbar";
import Body from "../components/Layout/Body";
import Landing from "../components/Section/Landing";
import Border from "../components/Layout/Border";
import Experiences from "../components/Section/Experiences"
import AboutMe from "../components/Section/AboutMe"
const Home: NextPage = () => {
  return (
    <>
    <MyHead />
    <Navbar location="home" />
    <Body>
      <Border>
      <Landing />
      <AboutMe /> 
      <Experiences />
      </Border>
    </Body>

    </>
  );
};
export default Home;
