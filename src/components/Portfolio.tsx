import { Button, Grid, Image } from "@mantine/core";

export const Portfolio = () => {
  return (
    <div className="mt-[101px]">
      <ul className="flex flex-col gap-[24px]">
        <li className="pb-[20px] text-[26px]">Portfolio</li>
        <li>
          <Grid gutter={24}>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
            <Grid.Col span={4}>
              <ul className="flex flex-col">
                <Image src="https://skyticket.jp/guide/wp-content/uploads/pixta_66930202_M-1200x675.jpg" />
                <li className="mt-[16px] text-[22px]">IT KINGDOM</li>
                <li className="my-[8px] text-[16px]">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </li>
                <li className="text-[12px]">2021.10 - 2021.12</li>
              </ul>
            </Grid.Col>
          </Grid>
        </li>
        <li className="text-center">
          <Button color="dark" radius="xl">
            View All
          </Button>
        </li>
      </ul>
    </div>
  );
};
