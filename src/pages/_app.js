import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
``;
