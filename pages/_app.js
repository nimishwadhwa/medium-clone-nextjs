import "@/styles/globals.css";
import { MediumProvider } from "../context/MediumContext";

function App({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}

export default App;
