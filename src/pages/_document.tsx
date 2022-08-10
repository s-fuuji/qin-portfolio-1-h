import { createGetInitialProps } from "@mantine/next";
import { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="w-[1440px] pt-[224px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
