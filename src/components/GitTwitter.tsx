import { Button } from "@mantine/core";

export const GitTwitter = () => {
  return (
    <div className="mt-[101px] flex">
      <ul className="flex w-[50%] flex-col gap-[24px]">
        <li className="pb-[20px] text-[26px]">GitHub</li>
        <li>test</li>
        <li className="text-center">
          <Button color="dark" radius="xl">
            View On GitHub
          </Button>
        </li>
      </ul>
      <ul className="flex w-[50%] flex-col gap-[24px]">
        <li className="pb-[20px] text-[26px]">Twitter</li>
        <li>test</li>
        <li className="text-center">
          <Button color="dark" radius="xl">
            View On Twitter
          </Button>
        </li>
      </ul>
    </div>
  );
};
