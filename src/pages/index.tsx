import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import { TbMoon } from "react-icons/tb";
const Home: NextPage = () => {
  return (
    <div className="w-[1440px] px-[224px]">
      <div className="flex h-[65px] items-center justify-between text-[18px]">
        <p>Shimabu IT University</p>
        <ul className="flex gap-[4px]">
          <li>About</li>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li className="border">
            <TbMoon />
          </li>
        </ul>
      </div>

      <div className="mx-[calc(50%-50vw)] bg-pink-6 px-[calc(50vw-50%)] py-[85.5px] text-white">
        <div className="flex items-center  justify-between">
          <div>
            <p className="text-[36px]">Shimabu IT University</p>
            <p className="text-[24px]">
              しまぶーのポートフォリオのためのページです
            </p>
          </div>
          <ul className="flex gap-[10px]">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaRss />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[80px] px-[10px]">
        <ul className="flex flex-col gap-[24px]">
          <li className="pb-[20px] text-[28px]">Blog</li>
          {[...Array(5)].map(() => {
            return (
              <li>
                <ul className="flex flex-col gap-[8px]">
                  <li className="text-[22px]">This is a header</li>
                  <li className="text-[16px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                  </li>
                  <li className="text-[12px]">2022.7.11</li>
                </ul>
              </li>
            );
          })}
          <li className="text-center">
            <Button color="dark" radius="xl">
              View All
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
