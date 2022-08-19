import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Header } from "src/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
