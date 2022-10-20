import { Footer, Navbar } from "../components/componentIndex";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <Navbar/>
    <Footer/>
  </div>
);

export default MyApp;
