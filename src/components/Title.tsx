import { Container, MediaQuery } from "@mantine/core";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

export const Title = () => {
  return (
    <div className="w-full bg-pink-6 pt-[53.5px] pb-[63.5px] text-white sm:pb-[85.5px] sm:pt-[85.5px]">
      <MediaQuery
        largerThan="sm"
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 0",
        }}
      >
        <Container className="px-[16px]">
          <div>
            <p className="text-[36px]">Shimabu IT University</p>
            <p className="text-[24px]">
              しまぶーのポートフォリオのためのページです
            </p>
          </div>
          <ul className="mt-[40px] flex gap-[10px]">
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
        </Container>
      </MediaQuery>
    </div>
  );
};
