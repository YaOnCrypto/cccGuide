import "../css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ParallaxProvider } from "react-scroll-parallax";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
