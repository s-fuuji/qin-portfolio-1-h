import { Button } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  buttonText: string;
};

export const BasicButton: FC<Props> = ({ href, buttonText }) => {
  return (
    <Button className="h-[45px] w-[154px]" color="dark" radius="xl">
      <Link href={href}>
        <a>{buttonText}</a>
      </Link>
    </Button>
  );
};
