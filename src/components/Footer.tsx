import { Container, Divider } from "@mantine/core";

export const Footer = () => {
  return (
    <div className="mt-[67px] text-center">
      <Divider size="xs" className="mx-[calc(50%-50vw)]" />
      <Container className="px-[16px]">
        <p className="my-[25px] text-[10px]">© ️2022 Shimabu IT University</p>
      </Container>
    </div>
  );
};
