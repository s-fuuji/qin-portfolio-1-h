import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Header } from "src/components/Header";
import { Title } from "src/components/Title";
import { Blog } from "src/components/Blog";
import { Divider, Grid, Image } from "@mantine/core";
import { Portfolio } from "src/components/Portfolio";
import { GitTwitter } from "src/components/GitTwitter";
import { Footer } from "src/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Title />
      <Blog />
      <Portfolio />
      <GitTwitter />
      <Footer />
    </div>
  );
};

export default Home;
