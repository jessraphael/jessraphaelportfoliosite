import type { NextPage } from "next";
import MyHead from "../components/MyHead";
import Navbar from "../components/Layout/Navbar";
import Body from "../components/Layout/Body";
import Landing from "../components/Landing";
import Border from "../components/Layout/Border";
const Home: NextPage = () => {
  return (
    <>
    <MyHead />
    <Body>
      <Navbar location="home"/>
      <Border>
      <Landing />
      </Border>
    </Body>
    </>
  );
};
export default Home;
