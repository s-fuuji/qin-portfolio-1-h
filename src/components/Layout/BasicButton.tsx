import { Button } from "@mantine/core";
import { FC } from "react";

type Props = {
  buttonText: string;
};

export const BasicButton: FC<Props> = ({ buttonText }) => {
  return (
    <Button className="h-[45px] w-[154px]" color="dark" radius="xl">
      {buttonText}
    </Button>
  );
};
