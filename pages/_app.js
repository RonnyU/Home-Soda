import '../styles/globals.css';
import { HomeSodaProvider } from '../context/HomeSodaProvider';

// deploy
function MyApp({ Component, pageProps }) {
  return (
    <HomeSodaProvider>
      <Component {...pageProps} />
    </HomeSodaProvider>
  );
}

export default MyApp;
