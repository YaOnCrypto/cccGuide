import "../css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ParallaxProvider } from "react-scroll-parallax";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <link href='https://db.onlinewebfonts.com/c/afa327cd559b36de171501fc06a854f7?family=8-bit+HUD' rel='stylesheet' type='text/css'></link>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
