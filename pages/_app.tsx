import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { lightTheme, darkTheme } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [activeTheme, setActiveTheme] = useState<Theme>(lightTheme);

  const toogleTheme = () =>
    setActiveTheme((prevVal) =>
      prevVal.palette.mode === "dark" ? lightTheme : darkTheme
    );

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} toogleTheme={toogleTheme} />
      </ThemeProvider>
    </CacheProvider>
  );
}
