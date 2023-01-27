import '../styles/globals.css';
import { HomeSodaProvider } from '../context/HomeSodaProvider';

function MyApp({ Component, pageProps }) {
  return (
    <HomeSodaProvider>
      <Component {...pageProps} />
    </HomeSodaProvider>
  );
}

export default MyApp;
