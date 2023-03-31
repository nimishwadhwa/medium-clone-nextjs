import "@/styles/globals.css";
import Head from "next/head";
import { MediumProvider } from "../context/MediumContext";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Medium Clone</title>
      </Head>
      <MediumProvider>
        <Component {...pageProps} />
      </MediumProvider>
    </>
  );
}

export default App;
