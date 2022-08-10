import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import { TbMoon } from "react-icons/tb";
import { Header } from "src/components/header";
import { Title } from "src/components/title";
import { Blog } from "src/components/blog";
const Home: NextPage = () => {
  return (
    <div className="w-[1440px] px-[224px]">
      <Header />
      <Title />
      <Blog />
    </div>
  );
};

export default Home;
