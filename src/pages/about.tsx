import { Container } from "@mantine/core";

const about = () => {
  return (
    <div>
      <Container className="mt-[40px] px-[16px]">
        <ul className="flex flex-col gap-[24px]">
          <li className="pb-[20px] text-[26px]">About</li>
          <li className="text-[22px]">Lightsound Shimabu</li>
          <li className="text-[16px]">
            ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default about;
