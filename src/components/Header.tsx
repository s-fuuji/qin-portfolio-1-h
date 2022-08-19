import { Burger, Container, Drawer, Group, MediaQuery } from "@mantine/core";
import { TbMoon } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
export const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <Container className="flex h-[65px] items-center justify-between">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </MediaQuery>
        <p className="text-[18px]">Shimabu IT University</p>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <ul className="flex items-center gap-[16px]">
              <li>
                <Link href="about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <TbMoon />
              </li>
            </ul>
          </div>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <TbMoon />
        </MediaQuery>
      </Container>
    </div>
  );
};
