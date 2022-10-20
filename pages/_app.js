import { Footer, Navbar } from "../components/componentIndex";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar/>
    <Footer/>
    <Component {...pageProps} />;
  </div>
);

export default MyApp;
